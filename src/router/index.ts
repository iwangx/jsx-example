import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';

Vue.use(VueRouter);

import App from '../views/App.vue';

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '',
      component: App,
    },
  ],
});



export default router;
