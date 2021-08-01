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
            popUpHeight: null,
            popUpWidth: null,
        }
    },
    created() {
        window.addEventListener("resize", this.updateSizeOfPopUpBasedOnImage)
    },
    unmounted() {
        window.removeEventListener("resize", this.updateSizeOfPopUpBasedOnImage)
    },
    methods: {
        closePopUp () {
            this.$emit('close');
        }, 
        updateSizeOfPopUpBasedOnImage(event) {
            if (window.innerWidth > 800) {
                this.popUpWidth = event.target.width * 2; 
                this.popUpHeight = event.target.height; 
            }
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
        z-index: 11;
        overflow: hidden;
    }

    .image {
        max-height: 80vh;
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

    @media (min-width: 800px) {
        .popup {
            min-width: 40vw;
            max-width: 80vw;
            max-height: 80vh;
        }

        .image {
            max-width: 40vw;
        }
    }


    @media (max-width: 800px) {
        .popup {
            overflow-y: scroll;
            width: min-content;
            max-height: 90vh;
        }

        .image {
            max-height: 70vh;
            max-width: 80vw;
            position: relative;
        }

        .text-container {
            float: none;
            width: 100%;
        }
    }

    /* Scrollbar Modifications: https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp */
    .popup::-webkit-scrollbar,
    .text-container::-webkit-scrollbar {
    width: 4px; /* width of the entire scrollbar */
    }

    .popup::-webkit-scrollbar-track,
    .text-container::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
    }

    .popup::-webkit-scrollbar-thumb,
    .text-container::-webkit-scrollbar-thumb {
    background-color: #bf763c; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 5px solid transparent; /* creates padding around scroll thumb */
    }

    .text-container, .popup {
    scrollbar-width: thin; /* "auto" or "thin" */
    scrollbar-color: #bf763c transparent; /* scroll thumb and track */
    }

/* ----------------------------------------------------------------------------------------- */


    
</style>