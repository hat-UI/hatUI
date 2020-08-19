import Vue from 'vue'
import App from './App'
import router from './router'
import hatUI from "@/index"
Vue.config.productionTip = false
Vue.use(hatUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
