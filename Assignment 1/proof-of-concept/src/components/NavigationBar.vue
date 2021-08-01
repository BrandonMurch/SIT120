<template>
    <nav class="navigation-bar">
        <img class="logo-image" src="../assets/images/logo.svg" alt="logo">
        <h1 class="logo-text">tend</h1>
        <div class="icon-container" @click="toggle">
            <img v-if="!isOpen" class="menu-icon" src="@/assets/images/MenuIcon.svg" />
            <svg v-else class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"/></svg>
        </div>
        <DropDown class="drop-down" :isOpen="isOpen"> 
            <template v-slot:inside> 
                <a class="navigation-link drop-link" v-for="link in links" :key="link.text" :href="link.url">{{ link.text }}</a>
            </template>
        </DropDown>
        <div class="large-navigation">
            <a class="navigation-link" v-for="link in links" :key="link.text" :href="link.url">{{ link.text }}</a>
        </div>
    </nav>
</template>

<script>
import DropDown from './DropDown.vue'

export default {
    name: 'NavigationBar', 
    components: {
        DropDown
    },
    data() {
        return {
            isOpen: false,
            links: [
                {text: "contact", url: "#"},
                {text: "search", url: "#"},
                {text: "learn", url: "#"},
                {text: "explore", url: "#"},
                {text: "my plants", url: "#"},
            ]
        }
    }, 
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        }
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
        margin: 1rem;
        font-size: 1.5rem;
    }

    .drop-link {
        width: 100%;
        text-align: center;
        border-bottom: 2px solid grey;
        margin: 0;
        padding: 1rem;
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
        cursor: pointer;
        fill: #BF763C;
    }

    @media (min-width: 800px) {
        .drop-down, .icon-container {
            display: none;
        }

        .large-navigation {
            position: absolute;
            top: 1rem;
            right: 0;
        }
    }

    @media (max-width: 800px) {
        .large-navigation {
            display: none;
        }
    }

</style>