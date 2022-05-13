import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router'

import Introduce from '@/views/Introduce/index.vue'

const routes: RouteRecordRaw[] = [{ path: '/', component: Introduce }]

// 创建router 路由
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
