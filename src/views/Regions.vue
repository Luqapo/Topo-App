<template>
  <div class="home">
    <List :url="`region/${areaId}`"/>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue';

export default {
  name: 'regions',
  props: {
    areaId: String,
  },
  components: {
    List,
  },
  created() {
    console.log('AREA ID- >', this.areaId);
  },
};
</script>
