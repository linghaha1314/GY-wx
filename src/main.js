import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Button,Icon } from 'vant';

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Icon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
