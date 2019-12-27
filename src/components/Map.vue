<template>
  <v-card-text class="fill-height">
    <div class="Map"/>
  </v-card-text>
</template>

<script>
import gmapsInit from '../utils/gmaps';

export default {
  props: {
    location: Object,
    name: String,
  },
  async mounted() {
    try {
      const google = await gmapsInit();
      const map = new google.maps.Map(this.$el, {
        center: {
          lat: Number(this.location.coordinates[0]),
          lng: Number(this.location.coordinates[1]),
        },
        zoom: 12,
      });
      const marker = new google.maps.Marker({
        position: {
          lat: Number(this.location.coordinates[0]),
          lng: Number(this.location.coordinates[1]),
        },
        map,
        title: this.name,
      });
      const contentString = `
        <div>
          <h1>${this.name}</h1>
          <h2>Dojazd</h2>
          <h2>Opis</h2>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${this.location.coordinates[0]},${this.location.coordinates[1]}">navigate to</a>
        </div>`;
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });
      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });
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
