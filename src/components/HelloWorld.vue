<template>
  <v-card-text class="fill-height">
    <div class="Map"/>
  </v-card-text>
</template>

<script>
import gmapsInit from '../utils/gmaps';

export default {
  async mounted() {
    try {
      const google = await gmapsInit();
      const map = new google.maps.Map(this.$el, {
        center: { lat: 50.42851041, lng: 19.67518419 },
        zoom: 8,
      });
      const marker = new google.maps.Marker({
        position: {
          lat: 50.42851041,
          lng: 19.67518419,
        },
        map,
      });
      console.log(map);
      console.log(marker);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.Map {
  width: 100vw;
  height: 80vh;
}
</style>
