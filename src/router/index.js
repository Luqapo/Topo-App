import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/areas',
    name: 'home',
    component: Home,
  },
  {
    path: '/region/:regionId',
    name: 'region',
    props: true,
    component: () => import(/* webpackChunkName: "region" */ '../views/Region.vue'),
  },
  {
    path: '/regions/:areaId',
    name: 'regions',
    props: true,
    component: () => import(/* webpackChunkName: "regions" */ '../views/Regions.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
