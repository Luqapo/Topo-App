<template>
  <div class="home">
    <Region :url="`region/one/${regionId}`"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Region from '@/components/Region.vue';

export default {
  name: 'region',
  props: {
    regionId: String,
  },
  components: {
    Region,
  },
  created() {
    console.log('region ID- >', this.regionId);
  },
};
</script>
