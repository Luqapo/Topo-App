<template>
  <div class="home">
    <Crag :url="`crag/${cragId}`"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Crag from '@/components/Crag.vue';

export default {
  name: 'crag',
  props: {
    cragId: String,
  },
  components: {
    Crag,
  },
  created() {
    console.log('crag ID- >', this.cragId);
  },
};
</script>
