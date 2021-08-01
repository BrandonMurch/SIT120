<template>
    <div class="container" >
        <div class="background" @click="closePopUp"/>
        <div class="popup" ref="popUp" :style="{ height: popUpHeight + 'px', width: popUpWidth + 'px' }">
            <button class="close"  @click="closePopUp">
                <img src="@/assets/icons/close.svg" alt="close" heigh="32" width="32">
            </button>
            <img class="image" :src="imageSource" :alt="title" @load="updateSizeOfPopUpBasedOnImage">
            <div class="text-container">
                <h3 class="title">{{title}}</h3>
                <h4 class="subtitle">{{subtitle}}</h4>
                <p class="paragraph">{{text}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PopUp",
    props: {
        imageSource: String,
        title: String,
        subtitle: String,
        text: String,
    },
    data() {
        return {
            popUpHeight: 0,
            popUpWidth: 0,
        }
    },
    methods: {
        closePopUp () {
            this.$emit('close');
        }, 
        updateSizeOfPopUpBasedOnImage(event) {
            this.popUpWidth = event.target.width * 2; 
            this.popUpHeight = event.target.height; 
        },
    },
}
</script>


<style scoped>
    .container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
    }

    .background {
        position:absolute;
        top:0;
        left:0;
        background-color: rgba(0,0,0,0.3);
        width: 100vw;
        height: 100vh;
        z-index: 10;

    }

    .popup {
        position: relative;
        background-color: #D8DAD4;
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        min-width: 40vw;
        max-width: 80vw;
        max-height: 80vh;
        z-index: 11;
        overflow: hidden;
    }

    .image {
        max-height: 80vh;
        max-width: 40vw;
    }

    .text-container {
        float: right;
        width: 49%;
        height: 100%;
        overflow-y: scroll;
    }

    .title {
        font-size: 2rem;
    }

    .subtitle {
        font-size: 1.25rem;
    }

    .title, .subtitle {
        text-align: center;
        width: 100%;
        margin: 0;
        margin-top: 1rem;
    }

    .close {
        position: absolute;
        top:0.5rem;
        right: 0.5rem;
        border: none;
        background: none;
        cursor: pointer;
    }

    /* Scrollbar Modifications: https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp */
    .text-container::-webkit-scrollbar {
    width: 4px; /* width of the entire scrollbar */
    }

    .text-container::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
    }

    .text-container::-webkit-scrollbar-thumb {
    background-color: #bf763c; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 5px solid transparent; /* creates padding around scroll thumb */
    }

    .text-container {
    scrollbar-width: thin; /* "auto" or "thin" */
    scrollbar-color: #bf763c transparent; /* scroll thumb and track */
    }

/* ----------------------------------------------------------------------------------------- */


    
</style>