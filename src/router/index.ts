import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue'),
    },
    {
      path: '/sustainability',
      name: 'sustainability',
      component: () => import('../views/SustainabilityView.vue'),
    },
    {
      path: '/equipment',
      name: 'equipment',
      component: () => import('../views/EquipmentView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

router.afterEach(() => {
  // 强制滚动到顶部，适配部分移动端浏览器
  window.scrollTo(0, 0)
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0

  // 尝试滚动可能滚动的容器
  const app = document.getElementById('app')
  if (app) app.scrollTop = 0

  const layout = document.querySelector('.app-layout')
  if (layout) layout.scrollTop = 0

  const main = document.querySelector('.app-main')
  if (main) main.scrollTop = 0
})

export default router
