<template>
  <DropDown :isOpen="isOpen">
        <template v-slot:inside >
            <div class="search-container" ref="searchbar">
                <input class="search-input" :key="isOpen" type="text" placeholder="What are you looking for?" v-model="searchTerm">
            </div>
        </template>
    </DropDown>
</template>

<script>
import DropDown from './DropDown.vue'

export default {
    name: "SearchBar",
    components: { DropDown },
    props: { isOpen: Boolean },
    watch: {
        isOpen: function(value) {
            if (!value) {
                this.close();
            }
        }
    },
    data() {
        return {
            searchTerm: "",
        }
    }, methods: {
        close() {
            this.searchTerm = "";
            this.$emit("close");
        }, submitSearch(event) {
            if (event.key == "Enter") {
                alert("Searching for: " + this.searchTerm + "...");
                this.close()
            } else if (event.key == "Escape") {
                this.close();
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
   .search-container {
        width: 100%;
        height: 3.4rem;
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
        padding: 1rem;
    }
</style>