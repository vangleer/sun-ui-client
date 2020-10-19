import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Index
  },
  {
    path: '/zh-CN',
    component: Index,
  },
  {
    path: '/zh-CN/button',
    component: () => import('../views/Button.vue')
  },
  {
    path: '/zh-CN/cell',
    component: () => import('../views/Cell.vue')
  },
  {
    path: '/zh-CN/icon',
    component: () => import('../views/Icon.vue')
  },
  {
    path: '/zh-CN/layout',
    component: () => import('../views/Layout.vue')
  },
  {
    path: '/zh-CN/popup',
    component: () => import('../views/Popup.vue')
  },
  {
    path: '/zh-CN/toast',
    component: () => import('../views/Toast.vue')
  },
  {
    path: '/zh-CN/checkbox',
    component: () => import('../views/Checkbox.vue')
  },
  {
    path: '/zh-CN/rate',
    component: () => import('../views/Rate.vue')
  },
  {
    path: '/zh-CN/switch',
    component: () => import('../views/Switch.vue')
  },
  {
    path: '/zh-CN/message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/zh-CN/pullRefresh',
    component: () => import('../views/PullRefresh.vue')
  },
  {
    path: '/zh-CN/stepper',
    component: () => import('../views/Stepper.vue')
  },
  {
    path: '/zh-CN/swipe',
    component: () => import('../views/Swipe.vue')
  },
  {
    path: '/zh-CN/navBar',
    component: () => import('../views/NavBar.vue')
  },
  {
    path: '/zh-CN/tabBar',
    component: () => import('../views/TabBar.vue')
  },
  {
    path: '/en-US',
    component: Index,
  },

  {
    path: '/en-US/button',
    component: () => import('../views/Button.vue')
  },
  {
    path: '/en-US/cell',
    component: () => import('../views/Cell.vue')
  },
  {
    path: '/en-US/icon',
    component: () => import('../views/Icon.vue')
  },
  {
    path: '/en-US/layout',
    component: () => import('../views/Layout.vue')
  },
  {
    path: '/en-US/popup',
    component: () => import('../views/Popup.vue')
  },
  {
    path: '/en-US/toast',
    component: () => import('../views/Toast.vue')
  },
  {
    path: '/en-US/checkbox',
    component: () => import('../views/Checkbox.vue')
  },
  {
    path: '/en-US/rate',
    component: () => import('../views/Rate.vue')
  },
  {
    path: '/en-US/switch',
    component: () => import('../views/Switch.vue')
  },
  {
    path: '/en-US/message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/en-US/pullRefresh',
    component: () => import('../views/PullRefresh.vue')
  },
  {
    path: '/en-US/stepper',
    component: () => import('../views/Stepper.vue')
  },
  {
    path: '/en-US/swipe',
    component: () => import('../views/Swipe.vue')
  },
  {
    path: '/en-US/navBar',
    component: () => import('../views/NavBar.vue')
  },
  {
    path: '/en-US/tabBar',
    component: () => import('../views/TabBar.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router