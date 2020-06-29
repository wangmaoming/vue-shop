import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import Axios from 'axios'
import router from './router'
import store from './store'

Vue.prototype.$axios = Axios;
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
