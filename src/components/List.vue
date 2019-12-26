<template>
  <div class="hello">
    <v-list v-if="data.length">
      <v-list-item v-for="(item) in data" :key="item.id">
        <v-list-item-content>
            <v-list-item-title v-text="item.name" @click="getData(item.id)"></v-list-item-title>
          </v-list-item-content>
      </v-list-item>
    </v-list>
    <h1 v-else>Something goes wrong sorry</h1>
  </div>
</template>

<script>
import fetch from '../utils/utils';

export default {
  name: 'Main',
  props: {
    url: String,
  },
  data() {
    return {
      data: [],
    };
  },
  async created() {
    const data = await fetch(this.url);
    this.data.push(...data);
  },
  methods: {
    getData(id) {
      console.log('ID TO FETCH ->', id);
      this.$router.push({ name: 'region', params: { regionId: id } });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
