<template>
    <div class="image-gallery">
        <ImageGallery v-bind:images="getImageData()"/>
    </div>
</template>

<script>
import ImageGallery from './ImageGallery.vue'
import plantData from '../assets/json/plants.json'

export default {
    name: 'ExplorePlants', 
    methods: {
        getImageData() {
            // Duplicate examples to fill the screen.
            const images = [];
            for (let i = 0; i < 5; i++) {
                for(let j = 0; j < 6; j++) {
                    let copy = {...plantData[j]};
                    copy.id = copy.id + (7 * i);
                    console.log(copy.title, copy.id, i)
                    images.push(copy);                    
                }
            }
            return images;
        }
    },
    data() {
        return{
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
        align-content: center;
    }
</style>