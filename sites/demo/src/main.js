import Vue from 'vue'
import App from './App'
import router from './router'
import hatUI from "@/index"
import toastRegistry from "../../../src/packages/toast/index"
Vue.config.productionTip = false
Vue.use(hatUI)
Vue.use(toastRegistry)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
