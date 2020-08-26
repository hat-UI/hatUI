import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect:'/home'
    },
    {
      path:'/home',
      name: 'home',
      component: () => import('../components/home.vue')
    },
    {
      path: '/actionsheet',
      name: 'actionsheet',
      component: () => import('../components/actionsheet.vue')
    },
    {
      path: '/icon',
      name: 'icon',
      component: () => import('../components/icon.vue')
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
    {
      path: '/radio',
      name: 'radio',
      component: () => import('../components/radio.vue')
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: () => import('../components/checkbox.vue')
    },
    {
      path: '/switch',
      name: 'switch',
      component: () => import('../components/switch.vue')
    },
    {
      path: '/loading',
      name: 'loading',
      component: () => import('../components/loading.vue')
    },
    {
      path: '/step',
      name: 'step',
      component: () => import('../components/step.vue')
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../components/upload.vue')
    },
    {
      path: '/toast',
      name: 'toast',
      component: () => import('../components/toast.vue')
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: () => import('../components/navbar.vue')
    },
    {
      path: '/noticebar',
      name: 'noticebar',
      component: () => import('../components/noticebar.vue')
    },
    {
      path: '/badge',
      name: 'badge',
      component: () => import('../components/badge.vue')
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component: () => import('../components/tabbar.vue')
    },
    {
      path: '/searchbar',
      name: 'searchbar',
      component: () => import('../components/searchbar.vue')
    },
  ]
})
