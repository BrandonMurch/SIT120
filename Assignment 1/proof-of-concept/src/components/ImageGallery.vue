<template>
    <div  class="gallery-container">
        <ImageCard 
            v-for="image in images" 
            v-bind:key="image.hoverText" 
            v-bind="image" />
    </div>
</template>

<script>
import ImageCard from './ImageCard.vue';

export default {
    name: 'ImageGallery',
    components: {
        ImageCard,
    },
    props: {
        images: Array
    }
}
</script>

<style scoped>
    .gallery-container {
        position: absolute;
        top: 90px;
        left: 0;
    }
</style>