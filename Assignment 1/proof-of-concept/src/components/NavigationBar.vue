<template>
    <nav class="navigation-bar">
        <img class="logo-image" src="../assets/images/logo.svg" alt="logo">
        <h1 class="logo-text">tend</h1>
        <div class="icon-container" @click="menuOpen = !menuOpen">
            <img class="menu-icon" :class="{menuIconOpen: !menuOpen}" src="@/assets/images/MenuIcon.svg" />
            <svg class="menu-icon" :class="{menuIconOpen: menuOpen}"  xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/></svg>
        </div>
        <DropDown class="drop-down" :isOpen="menuOpen"> 
            <template v-slot:inside> 
                <a class="navigation-link drop-link" v-for="link in links" :key="link.text" :href="link.url">{{ link.text }}</a>
                <a class="navigation-link drop-link" @click="searchToggle()" href="#">search</a>
                <DropDown :isOpen="searchOpen">
                    <template v-slot:inside >
                        <div class="search-container" ref="searchbar">
                            <input class="search-input" type="text" v-model="searchTerm">
                        </div>
                    </template>
                </DropDown>
            
            </template>
                
        </DropDown>
        <div class="large-navigation">
            <a class="navigation-link" @click="searchToggle()" href="#">search</a>
            <a class="navigation-link" v-for="link in links" :key="link.text" :href="link.url">{{ link.text }}</a>
                <DropDown :isOpen="searchOpen">
                    <template v-slot:inside >
                        <div class="search-container" ref="searchbar">
                            <input class="search-input" type="text" v-model="searchTerm">
                        </div>
                    </template>
                </DropDown>
        </div>
    </nav>
</template>

<script>
import DropDown from './DropDown.vue'
// import SearchBar from './SearchBar.vue'

export default {
    name: 'NavigationBar', 
    components: { DropDown },
    data() {
        return {
            menuOpen: false,
            searchOpen: false,
            searchTerm: "",
            links: [
                {text: "contact", url: "#"},
                {text: "learn", url: "#"},
                {text: "explore", url: "#"},
                {text: "my plants", url: "#"},
            ]
        }
    }, methods: {
        searchToggle() {
            this.searchOpen = !this.searchOpen;
            if (!this.searchOpen) {
                setTimeout(() => this.searchTerm = "", 800)
            }
        }, submitSearch(event) {
            if (event.key == "Enter") {
                alert("Searching for: " + this.searchTerm + "...");
                this.searchTerm = "";
                this.searchOpen = false;
            } else if (event.key == "Escape") {
                this.searchTerm = "";
                this.searchOpen = false;
            }
        }
    },
    created() {
        window.addEventListener("keyup", this.submitSearch);
    }, unmounted () {
        window.addEventListener("keyup", this.submitSearch);
    }
}
</script>

<style scoped>
    .navigation-bar {
        position: relative;
        min-height: 2rem;
    }

    .logo-image {
        height: 5rem;
    }

    .logo-text {
        display: inline;
        color: #BF763C;
        font-size: 4rem;
        position: relative;
        top: -1rem;
        cursor: default;
    }

    .navigation-link {
        float: right;
        color: #BF763C;
        text-decoration: none;
        margin: 2rem 1rem;
        font-size: 1.5rem;
    }

    .drop-link {
        width: 100%;
        text-align: center;
        border-bottom: 2px solid grey;
        margin: 0;
        padding: 1rem 0;
    }

    .navigation-link:hover {
        font-weight: bold;
    }

    .menu-icon {
        height: 4rem;
        width: 4rem;
        position: absolute;
        right: 2rem;
        top: 1rem;
        opacity: 0;
        transition: opacity 0.5s;
        cursor: pointer;
        fill: #BF763C;
    }

    .menuIconOpen {
        opacity: 1;
        transition: opacity 0.5s;
        transition-delay: 0.5s;
    }

    .search-container {
        width: 100%;
        height: 2.1rem;
        display: block;
    }

    .search-input {
        position: relative;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        border: none;
        height: 2rem;
        text-align: center;
        color:white;
        font-family: fell, serif;
        font-size: 2rem;
    }

    @media (min-width: 800px) {
        .drop-down, .icon-container {
            display: none;
        }

        .large-navigation {
            display: inline;
        }
    }

    @media (max-width: 800px) {
        .large-navigation {
            display: none;
        }
    }

</style>