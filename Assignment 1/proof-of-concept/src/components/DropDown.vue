<template>
    <div :class="{ open: isOpen, container: true }" :style="{height: height}">
        <slot name="inside"></slot>
    </div>
</template>

<script>
export default {
    name: "DropDown",
    props: {
        isOpen: Boolean,
        height: Number,
    }
}
</script>

<style scoped>

    .container {
        position: relative;
        left: -10%;
        max-height: 0;
        width: 120%;
        overflow: hidden;
        transition: 1s; 
        transition-property: max-height;
        box-shadow: inset 0px 0px 4px 4px grey;
    }

    .open {
        max-height: 500px;
        /* Uneven transition times due to the max-height css animation work around. */
        transition: 1s;
        transition-property: max-height;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }


</style>