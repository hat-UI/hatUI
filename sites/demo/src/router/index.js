import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/actionsheet',
      name: 'actionsheet',
      component: () => import('../components/actionsheet.vue')
    },
    {
      path: '/popup',
      name: 'popup',
      component: () => import('../components/popup.vue')
    }
  ]
})
