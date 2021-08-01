<template>
  <div class="background">
      <div id="popup">

      </div>
  </div>
</template>

<script>
export default {
    name: "PopUp",
    props: {
        imageLink: String,
    },
    methods: {
        resizeWithImage() {
            const image = new Image();
            image.onload = function() {
                const containerDiv = document.getElementById("popup")
                containerDiv.style.height = this.height + "px";
                containerDiv.style.width = this.width + "px";
                containerDiv.appendChild(this);
            }
            image.src = this.imageLink;
        }
    }
}
</script>


<style scoped>
    .background {
        position: fixed;
        top: 90px;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.3);
        backdrop-filter: blur(10px);
        z-index: 10;
    }

    .popup {
        background-color: #D8DAD4;
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
</style>