<template>
    <div>
        <!-- <div v-for="image in images" v-bind:key="image.hoverText"></div> -->
        <ImageGallery v-bind:images="imageData"/>
    </div>
</template>

<script>
import ImageGallery from './ImageGallery.vue'

export default {
    name: 'ExplorePlants', 
    data() {
        return {
            imageData: [
                {
                    imageSource: "https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                    hoverText: "Monstera"
                }
            ]
        }
    }, 
    components: {
        ImageGallery
    }
}
</script>

<style>
</style>