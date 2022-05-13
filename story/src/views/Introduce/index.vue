<template>
  <div class="demo-introduce">
    <header class="demo-introduce-header">
      <img :src="logoImg" alt="" />
      <span>Vu-Design-Plus</span>
    </header>
    <h2>介绍</h2>
    <div class="content">
      <span>Vu Design Plus</span>是一款基于 <span>Vue3.0</span> +
      <span>typescript</span>开发的中后台UI组件库, 组件的高配置性
      <span>+</span> 传统的UI组件库的特性
      <span>+</span> 更好的交互体验,为用户的使用提供了很大的便利
    </div>
    <h2>特性</h2>
    <div class="content">
      <ul>
        <li>
          <vu-icon type="star-on" :color="randomBk()"></vu-icon>
          优锘科技森大屏产品专用组件库, 定制化程度高，以黑色主题为主，已上生产放心使用
        </li>
        <li>
          <vu-icon type="star-on" :color="randomBk()"></vu-icon>所有组件基于
          <span>typescript</span> ,<span>CompositionAPI</span>
          以及
          <span>tsx</span>
          开发。是Vuetypescript爱好者绝佳学习对象。如果你希望使用tsx开发高质量的Vue组件，那么强烈推荐尝试基于
          <span>Viewer-Design</span> 的组件来封装
        </li>
        <li>
          <vu-icon type="star-on" :color="randomBk()"></vu-icon
          >支持组件按需引入，支持图标按需加载，组件库使用了 <span>pnpm</span> +
          <span>monorepo</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logoImg from '@/assets/img/logo.png'
import randomBk from '@/utils/index'

export default defineComponent({
  setup() {
    return {
      logoImg,
      randomBk
    }
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
