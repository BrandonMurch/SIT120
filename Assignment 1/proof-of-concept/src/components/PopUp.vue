<template>
  <div class="container" >
      <div class="background" @click="closePopUp"/>
      <div class="popup" ref="popUp" :style="{ height: popUpHeight + 'px', width: popUpWidth + 'px' }">
          <img class="image" :src="imageSource" :alt="title" @load="updateSizeOfPopUpBasedOnImage">
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
            this.popwidth = event.target.width * 2; 
            this.popheight = event.target.height; 
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
</style>