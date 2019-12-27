import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main,
  },
  {
    path: '/region/:regionId',
    name: 'region',
    props: true,
    component: () => import(/* webpackChunkName: "region" */ '../views/Rejon.vue'),
  },
  {
    path: '/regions/:areaId',
    name: 'regions',
    props: true,
    component: () => import(/* webpackChunkName: "regions" */ '../views/Regions.vue'),
  },
  {
    path: '/sector/:sectorId',
    name: 'sector',
    props: true,
    component: () => import(/* webpackChunkName: "sector" */ '../views/Sector.vue'),
  },
  {
    path: '/crag/:sectorId',
    name: 'crag',
    props: true,
    component: () => import(/* webpackChunkName: "crag" */ '../views/Crag.vue'),
  },
  {
    path: '/map',
    name: 'map',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "map" */ '../views/Map.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
