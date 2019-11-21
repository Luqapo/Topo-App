<template>
  <div class="hello">
    <v-list v-if="content.length">
      <v-list-item v-for="(item) in content" :key="item.id">
        <h2>{{item.name}}</h2>
      </v-list-item>
    </v-list>
    <h1 v-else>{{msg}}</h1>
  </div>
</template>

<script>
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
    console.log('Created.');
    const areas = await fetch('http://localhost:3000/area')
      .then((res) => {
        console.log('RES', res);
        if (res.status !== 200) {
          return res.json().then((re) => { throw new Error(re.error); });
        }
        return res.json();
      })
      .catch(err => console.log('ERROR ->', err));
    console.log('RES ->', areas);
    this.content.push(...areas);
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
