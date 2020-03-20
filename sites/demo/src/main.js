import Vue from 'vue'
import App from './App'
import router from './router'
import hatUI from "../../../src/index.js"
// import hatUI from "../../../dist/hat.min.js"
// import "../../../dist/hat.min.css"
Vue.config.productionTip = false
Vue.use(hatUI)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
