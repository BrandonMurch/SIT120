<template>
    <div>
      <NavigationBar />
      <ExplorePlants />
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
  }
}
</script>