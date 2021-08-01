<template>
    <div class="image-gallery">
        <ImageGallery v-bind:images="getImageData()"/>
    </div>
</template>

<script>
import ImageGallery from './ImageGallery.vue'

export default {
    name: 'ExplorePlants', 
    methods: {
        getImageData() {
            const images = [];
            for (let i = 0; i < 5; i++) {
                images.push({
                    imageSource: "https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                    hoverText: "Monstera"
                });
                images.push({
                    imageSource: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                    hoverText: "Fern"
                });
                images.push({
                    imageSource: "https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1833&q=80",
                    hoverText: "Plant"
                }),
                images.push({
                    imageSource: "https://images.unsplash.com/photo-1508502726440-477c94bc369e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                    hoverText: "Plant2"
                });
            }
            return images;
        }
    },
    components: {
        ImageGallery
    }
}
</script>

<style>
    .image-gallery {
        display: flex;
        width: 100vw;
        height: 100vh;
        align-content: center;
    }
</style>