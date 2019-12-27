<template>
  <div class="hello">
    <v-list-item-group color="primary">
      <v-list v-if="content.length">
        <v-list-item v-for="(area) in content" :key="area.id">
          <v-list-item-content>
            <v-list-item-title v-text="area.name" @click="getRegions(area.id)"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <h1 v-else>{{msg}}</h1>
    </v-list-item-group>
  </div>
</template>

<script>
const { API_URL } = require('../../config/config');

export default {
  name: 'Main',
  props: {
    msg: String,
  },
  data() {
    return {
      content: [],
    };
  },
  async created() {
    const areas = await this.fetch('area');
    this.content.push(...areas);
  },
  methods: {
    async getRegions(areaId) {
      this.$router.push({ path: `regions/${areaId}` });
    },
    async fetch(route) {
      const data = await fetch(`${API_URL}/${route}`)
        .then((res) => {
          if(res.status !== 200) {
            return res.json().then((re) => { throw new Error(re.error); });
          }
          return res.json();
        })
        .catch(err => console.log('ERROR ->', err));
      console.log('DATA ->', data);
      return data;
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
