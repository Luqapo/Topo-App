<template>
  <div class="hello">
    <v-list>
      <v-list-group
            no-action
            sub-group
            :value="false"
            v-if="data && data.sectors && data.sectors.length"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Sectors</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(item) in data.sectors"
              :key="item.id"
              link
              @click="getSector(item.id)"
            >
              <v-list-item-title v-text="item.name"></v-list-item-title>
              <v-list-item-icon>
                <v-icon >></v-icon>
              </v-list-item-icon>
            </v-list-item>
      </v-list-group>
      <v-list-group
            no-action
            sub-group
            value="fasle"
            v-if="data && data.crags && data.crags.length"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Crags</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="(item) in data.crags"
              :key="item.id"
              link
            >
              <v-list-item-title
                v-text="item.name"
                @click="getCrag(item.id)"
                >
              </v-list-item-title>
              <v-list-item-icon @click="showMap(item)">
                <v-icon >near_me</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
      <h1 v-else>Something goes wrong sorry</h1>
    </v-list>
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
    this.data = { ...this.data, ...data };
  },
  methods: {
    getSector(id) {
      console.log('sector ID TO FETCH ->', id);
      this.$router.push({ name: 'sector', params: { sectorId: id } });
    },
    getCrag(id) {
      console.log('crag ID TO FETCH ->', id);
      this.$router.push({ name: 'crag', params: { cragId: id } });
    },
    showMap(crag) {
      console.log('CRAG ->', crag);
      this.$router.push({ name: 'map', query: { location: crag.location, name: crag.name } });
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
