// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueAnalytics from 'vue-analytics';
import App from './App';
import router from './router';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-102416922-2',
  router,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
