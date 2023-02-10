import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../views/dashboard.vue'
import assetsManagement from '../views/assetsManagement.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/assetsManagement',
      name: 'assetsManagement',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: assetsManagement
    }
  ]
})

export default router
