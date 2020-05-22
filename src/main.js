import Vue from 'vue';
import App from './App.vue';
import store from './store';

import ToggleSwitch from 'vuejs-toggle-switch';
Vue.use(ToggleSwitch);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
