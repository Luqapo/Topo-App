<template>
  <div class="about">
    <RoutePlaner>Map</RoutePlaner>
  </div>
</template>

<script>
// @ is an alias to /src
import RoutePlaner from '@/components/RoutePlaner.vue';

export default {
  name: 'planer',
  components: {
    RoutePlaner,
  },
  created() {
    console.log('Started ->');
  },
};
</script>

<style lang="scss" scoped>
.about {
  width: 100vw;
  height: 100%;
}
</style>
