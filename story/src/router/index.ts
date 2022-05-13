import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router'

import Introduce from '@/views/Introduce/index.vue'
import Icon from '@/views/Icon/index.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Introduce },
  { path: '/introduce', component: Introduce },
  { path: '/icon', component: Icon }
]

// 创建router 路由
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
