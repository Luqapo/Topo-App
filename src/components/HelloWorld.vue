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
        zoom: 12,
      });
      const marker = new google.maps.Marker({
        position: {
          lat: 50.42851041,
          lng: 19.67518419,
        },
        map,
        title: 'Kozłowa skała',
      });
      const contentString = '<div><h1>Kozłowa skała</h1><h2>Dojazd</h2><h2>Opis</h2></div>';
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });
      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });
    } catch (error) {
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
