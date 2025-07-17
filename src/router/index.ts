import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../components/auth/login-page.vue'),
    },
    {
        path: '/questions-list',
        name: 'questions-list',
        component: () => import('../components/common/questions-list-page.vue'),
    }
  ],
})

export default router
