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
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('../components/button.vue')
    },
    {
      path: '/datepicker',
      name: 'datepicker',
      component: () => import('../components/datepicker.vue')
    },
  ]
})
