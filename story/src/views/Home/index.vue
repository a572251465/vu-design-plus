<script lang="ts" setup>
import logo from '@/assets/img/logo.png'
import { reactive, ref } from 'vue'

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
