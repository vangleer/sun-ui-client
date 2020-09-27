import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/button',
    name: 'Button',
    component: () => import('../views/Button.vue')
  },
  {
    path: '/cell',
    name: 'Cell',
    component: () => import('../views/Cell.vue')
  },
  {
    path: '/icon',
    name: 'Icon',
    component: () => import('../views/Icon.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import('../views/Layout.vue')
  },
  {
    path: '/popup',
    name: 'Popup',
    component: () => import('../views/Popup.vue')
  },
  {
    path: '/toast',
    name: 'Toast',
    component: () => import('../views/Toast.vue')
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: () => import('../views/Checkbox.vue')
  },
  {
    path: '/rate',
    name: 'Rate',
    component: () => import('../views/Rate.vue')
  },
  {
    path: '/switch',
    name: 'Switch',
    component: () => import('../views/Switch.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/pullRefresh',
    name: 'PullRefresh',
    component: () => import('../views/PullRefresh.vue')
  },
  {
    path: '/stepper',
    name: 'Stepper',
    component: () => import('../views/Stepper.vue')
  },
  {
    path: '/swipe',
    name: 'Swipe',
    component: () => import('../views/Swipe.vue')
  },
  {
    path: '/navBar',
    name: 'NavBar',
    component: () => import('../views/NavBar.vue')
  },
  {
    path: '/tabBar',
    name: 'TabBar',
    component: () => import('../views/TabBar.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router