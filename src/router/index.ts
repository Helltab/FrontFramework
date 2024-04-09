

import { createRouter, createWebHistory } from 'vue-router'
import type { RouterMeta } from '@/router/RouterMeta'
import { routes } from '@/router/defaultRoutes'

const options = {
  history: createWebHistory('/admin'),

  routes
}
const router = createRouter(options)

export default router
