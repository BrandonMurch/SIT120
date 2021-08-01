<template>
    <div  class="gallery-container">
        <PopUp v-if="popupImage" v-bind="popupImage" @close="closePopUp"/>
        <div class="gallery-column" v-for="(column, index) in imageColumns" :key="index">
            <ImageCard 
                v-for="image in column" 
                :key = image.id
                v-bind="image" 
                @click="openPopUp(image)"
                />
        </div>        
    </div>
</template>

<script>
import ImageCard from './ImageCard.vue';
import PopUp from './PopUp.vue';
import { debounce } from '../assets/javascript/debounce'

export default {
    name: 'ImageGallery',
    components: {
        ImageCard,
        PopUp,
    },
    props: {
        images: Array
    },
    //https://stackoverflow.com/questions/49380830/vue-js-how-to-get-window-size-whenever-it-changes
    created() {
        window.addEventListener("resize", debounce(this.updateColumnsOnResize))
    },
    unmounted() {
        window.removeEventListener("resize", debounce(this.updateColumnsOnResize))
    },
    methods: {
        updateColumnsOnResize() {
            this.imageColumns = this.splitImages();
        },
        splitImages() {
            const columns = Math.floor(window.innerWidth / 265)
            const columnQueue = [];
            for (let i = 0; i < columns; i++) {
                columnQueue[i] = [];
            }
            for (let i = 0; i < this.images.length; i++) {
                columnQueue[i % columns].push(this.images[i]);
            }
            return columnQueue;
        },
        openPopUp(image) {
            this.popupImage = image;
        },
        closePopUp() {
            this.popupImage = null;
        }
    }, 
    data () {
        return {
            imageColumns: this.splitImages(),
            popupImage: null,
        }
    },

}
</script>

<style scoped>
    .gallery-container {
        position: relative;
        top: 0;
        margin: auto;
        display: flex;
        flex-direction: row;
    }

    .gallery-column {
        width: 250px;
        margin: 0.5rem;
}
</style>