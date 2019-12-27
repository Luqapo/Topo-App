<template>
  <div class="about">
    <Map
      :location="this.$route.query.location"
      :name="this.$route.query.name"
      >Map</Map>
  </div>
</template>

<script>
// @ is an alias to /src
import Map from '@/components/Map.vue';

export default {
  name: 'map',
  components: {
    Map,
  },
  created() {
    console.log('LOCTION ->', this.$route.query.location);
  },
};
</script>

<style lang="scss" scoped>
.about {
  width: 100vw;
  height: 100%;
}
</style>
