<template>
  <div class="home">
    <Main msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue';

export default {
  name: 'main',
  components: {
    Main,
  },
};
</script>
