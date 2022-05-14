<script lang="ts" setup>
import icons, { iconFields } from './icons'
import { VuMessage, VuIcon } from 'vu-design-plus'
import TableProps from '@/components/TableProps/index.vue'

/**
 * @author lihh
 * @description 点击icon
 */
const clickIcon = (iconName: string) => {
  VuMessage.success(`您选中了<vu-icon-${iconName}>图标`)
}
</script>

<template>
  <div class="icon-demo">
    <h2>Icon 图标</h2>
    <p>提供一套常用的图标集合</p>
    <h3>图标集合</h3>
    <ul>
      <li v-for="item in icons" :key="item" @click="clickIcon(item)">
        <VuIcon :type="item"></VuIcon>
        <span>{{ `vu-icon-${item}` }}</span>
      </li>
    </ul>
    <h3>Icon Props</h3>
    <TableProps :component-props="iconFields"></TableProps>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
