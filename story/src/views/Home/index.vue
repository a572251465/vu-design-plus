<script lang="ts" setup>
import logo from '@/assets/img/logo.png'
import { reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// 导航列表
const navList = reactive<{ introduce: string; label: string; path: string }[]>([
  {
    path: 'introduce',
    introduce: 'Introduce',
    label: '介绍'
  },
  {
    path: 'icon',
    introduce: 'icon',
    label: '图标'
  },
  {
    path: 'message',
    introduce: 'Message',
    label: '消息'
  },
  {
    path: 'messageBox',
    introduce: 'MessageBox',
    label: '确认框'
  },
  {
    path: 'dialog',
    introduce: 'Dialog',
    label: '对话框'
  }
])
// 表示激活的nav
const activeNav = ref<string>('introduce')
// 表示路由信息
const router = useRouter()
const route = useRoute()
// 监听路由变化
watch(
  () => route.fullPath,
  (value: string) => {
    const path = value.slice(1)
    const paths = navList.map((item) => item.path)

    if (!paths.includes(path)) return
    activeNav.value = path
  }
)

/**
 * @author lihh
 * @description 跳转路径
 * @param path 跳转到path
 */
const skipPath = (path: string) => {
  router.push({ path: `/${path}` })
}
</script>

<template>
  <div class="home">
    <header>
      <div class="left">
        <img :src="logo" alt="logo" />
        <span>vu.design.plus ui</span>
      </div>
      <div class="right">
        <ul>
          <li class="active">组件</li>
          <li>关于</li>
          <li>公司</li>
          <li>鸣谢</li>
        </ul>
      </div>
    </header>
    <div class="body">
      <div class="left">
        <ul>
          <li
            v-for="(item, index) in navList"
            :key="index"
            :class="activeNav === item.path ? 'active' : ''"
            @click="skipPath(item.path)"
          >
            <span>{{ item.introduce }}</span>
            <span>{{ item.label }}</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
