import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import _ from 'lodash';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/assets/css/common.css';
import '@/assets/css/item.css';

Vue.use(BootstrapVue, IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
