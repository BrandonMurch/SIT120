<template>
    <div class="image-container">
        <img class="image" :src="imageSource" :alt="hoverText">
        <div class="image-overlay">
            <p class="image-hover-text">{{ hoverText }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: "ImageCard",
    props: {
        imageSource: String,
        hoverText: String,
        id: Number,
    },
}
</script>

<style scoped>
    .image-container {
        position: relative;
        width:250px;
        border: 1px solid black;
        border-radius: 20px;
        box-shadow: 0 5px 5px grey;
        overflow: hidden;
        margin-bottom: 1rem;
    }

    .image {
        width: 100%;
        /* https://stackoverflow.com/questions/10844205/html-5-strange-img-always-adds-3px-margin-at-bottom */
        vertical-align: middle;
    }

    .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }

    .image-overlay:hover {
        background-color: rgba(0,0,0,0.3);
        cursor: pointer;
    }
    
    .image-hover-text {
        display:none;
    }

    .image-overlay:hover .image-hover-text {
        display: inline;
        position:absolute;
        top:40%;
        text-align: center;
        width: 100%;
        color: white;
        font-size: 2rem;
        margin: 0;
    }
</style>