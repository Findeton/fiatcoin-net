import Vue from 'vue';
import Router from 'vue-router';
import VueAnalytics from 'vue-analytics';
import Hello from '@/components/Hello';

Vue.use(Router);

Vue.use(VueAnalytics, {
  id: 'UA-102416922-2',
});

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});
