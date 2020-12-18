import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
    children: [
      {
        path: '/home',
        redirect: '/home/shop'
      },
      {
        path: '/home/mine',
        name: 'mine',
        component: () => import('@/views/mine.vue')
      },
      {
        path: '/home/publish',
        name: 'publish',
        component: () => import('@/views/publish.vue')
      },
      {
        path: '/home/shop',
        name: 'shop',
        component: () => import('@/views/shop.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
