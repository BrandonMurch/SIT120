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
                    title: "monstera deliciosa",
                    id: i,
                });
                images.push({
                    imageSource: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                    title: "dryopteris affinis",
                    id: i + 1,
                });
                images.push({
                    imageSource: "https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1833&q=80",
                    title: "Plant",
                    id: i + 2,
                }),
                images.push({
                    imageSource: "https://images.unsplash.com/photo-1508502726440-477c94bc369e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                    title: "Plant2",
                    subtitle: '"Droopy"',
                    text: this.lorem,
                    id: i + 3,
                });
            }
            return images;
        }
    },
    data() {
        return{
        lorem: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod nisi porta lorem mollis aliquam ut. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. In hac habitasse platea dictumst vestibulum rhoncus. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Leo a diam sollicitudin tempor id eu nisl nunc mi. Vitae nunc sed velit dignissim sodales ut eu sem integer. Aliquet sagittis id consectetur purus ut faucibus. Lorem donec massa sapien faucibus et molestie ac. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Facilisis magna etiam tempor orci eu.

                Augue mauris augue neque gravida in fermentum et sollicitudin ac. Dignissim diam quis enim lobortis scelerisque fermentum dui. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Turpis egestas pretium aenean pharetra magna ac placerat. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Eros in cursus turpis massa tincidunt dui ut. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Blandit cursus risus at ultrices mi tempus.

                Cursus sit amet dictum sit amet justo. Mollis nunc sed id semper risus in hendrerit. Suscipit tellus mauris a diam maecenas sed enim ut sem. Feugiat sed lectus vestibulum mattis ullamcorper velit. Sit amet aliquam id diam maecenas ultricies. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Venenatis urna cursus eget nunc scelerisque viverra mauris. Risus ultricies tristique nulla aliquet enim tortor at auctor. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Tristique magna sit amet purus gravida quis blandit. Libero enim sed faucibus turpis in eu mi bibendum. Elementum nibh tellus molestie nunc non. Quis vel eros donec ac odio tempor orci dapibus ultrices. Aliquet nibh praesent tristique magna sit amet purus gravida. Massa enim nec dui nunc mattis enim ut tellus.`

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