<template>
  <v-card-text class="fill-height">
    <h1>Hello !!!</h1>
    <div class="Map"/>
  </v-card-text>
</template>

<script>
import gmapsInit from '../utils/gmaps';

const API_KEY = require('../../config/config.json').mapApiKey;

export default {
  props: {
    location: Object,
    name: String,
  },
  async mounted() {
    try {
      const routeUrl = `https://maps.googleapis.com/maps/api/api/directions/json?origin=Sosnowiec&destination=Katowice&mode=transit&key=${API_KEY}`;
      const route = await fetch(routeUrl).then(res => res.json());
      console.log('Response ->', route);
    } catch(error) {
      console.error(error);
    }
  },
};
</script>

<style scoped lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

.Map {
  width: 100vw;
  height: 100%  ;
}
</style>
