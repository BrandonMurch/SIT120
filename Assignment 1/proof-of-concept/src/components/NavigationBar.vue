<template>
    <nav class="navigation-bar">
        <img class="logo-image" src="../assets/images/logo.svg" alt="logo">
        <h1 class="logo-text">tend</h1>
        <a class="navigation-link" href="#">contact</a>
        <a class="navigation-link" href="#">search</a>
        <a class="navigation-link" href="#">learn</a>
        <a class="navigation-link" href="#">explore</a>
        <a class="navigation-link" href="#">my plants</a>
        
    </nav>
</template>

<script>
export default {
    name: 'NavigationBar', 
}
</script>

<style scoped>
    .navigation-bar {
        position: relative;
        top: 0;
        left: 0;
        width: 100vw;
        height: 2rem;
    }

    .logo-image {
        height: 5rem;
    }

    .logo-text {
        display: inline;
        color: #BF763C;
        font-size: 4rem;
        position: relative;
        top: -1rem;
    }

    .navigation-link {
        float: right;
        color: #BF763C;
        text-decoration: none;
        margin: 1rem;
        font-size: 1.5rem;
    }

    .navigation-link:first-of-type {
        margin-right: 3rem;
    }

    .navigation-link:hover {
        font-weight: bold;
    }
</style>