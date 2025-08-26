import { createRouter, createWebHistory } from 'vue-router'
import PreOrderView from '@/views/PreOrderView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'pre-order',
      component: PreOrderView,
    },
  ],
})

export default router
