<template>
  <div class="home">
    <Sector :url="`sector/${sectorId}`"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Sector from '@/components/Sector.vue';

export default {
  name: 'sector',
  props: {
    sectorId: String,
  },
  components: {
    Sector,
  },
  created() {
    console.log('region ID- >', this.sectorId);
  },
};
</script>
