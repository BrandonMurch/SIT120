<template>
  <div>
      <div class="application-background"></div>
      <NavigationBar />
      <ExplorePlants class="main-window" />
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
import ExplorePlants from './ExplorePlants.vue';

export default {
  name: 'TestingContainer',
  components: {
      NavigationBar,
      ExplorePlants,
  },
}
</script>

<style scoped>
  .application-background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #D8DAD4;
  }

  .main-window {
    position: relative;
    top: 4rem;
  }
</style>