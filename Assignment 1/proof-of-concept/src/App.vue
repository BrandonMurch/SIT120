<template>
  <div>
      <div class="application-background"></div>
      <NavigationBar />
      <ExplorePlants />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import ExplorePlants from './components/ExplorePlants.vue';

export default {
  name: 'App',
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
</style>
