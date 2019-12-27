<template>
  <div class="hello">
    <v-list two-line>
      <v-list-item-group
        active-class="blue--text"
        v-model="selected"
        multiple
        v-if="data && data.routes && data.routes.length"
        >
          <v-list-item v-for="(item) in data.routes" :key="item._id">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.grade">
                </v-list-item-subtitle>
                <v-list-item-subtitle v-text="item.author"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="add"></v-list-item-action-text>
                <v-icon
                  v-if="!active"
                  color="grey lighten-1"
                >
                  add
                </v-icon>

                <v-icon
                  v-else
                  color="yellow"
                >
                  done
                </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>
          <!-- </v-list-item>
            <v-list-item
              v-for="(item) in data.routes"
              :key="item.id"
              link
            >
              <v-list-item-title v-text="item.name"></v-list-item-title>
              <v-list-item-icon>
                <v-icon >></v-icon>
              </v-list-item-icon>
            </v-list-item> -->
          </v-list-item-group>
      <h1 v-else>Something goes wrong sorry</h1>
    </v-list>
  </div>
</template>

<script>
import fetch from '../utils/utils';

export default {
  name: 'sectorList',
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
    console.log('TCL: created -> data', data);
    this.data = { ...this.data, ...data };
    console.log('THIS DATA ->', this.data);
  },
  methods: {
    getData(id) {
      console.log('ID TO FETCH ->', id);
      this.$router.push({ name: 'region', params: { regionId: id } });
    },
    getSector(id) {
      console.log('sector ID TO FETCH ->', id);
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
