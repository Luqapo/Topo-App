<template>
<div>
    <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title >
                <router-link to="/">Home</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/about">Map</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>map</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="/planer">Planer</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
        app
        color="indigo"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>Mobile Topo</v-toolbar-title>
      </v-app-bar>
</div>
</template>

<script>
export default {
  name: 'navi',
  data: () => ({
    drawer: null,
  }),
};
</script>
