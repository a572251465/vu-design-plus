<script lang="ts" setup>
import { VuMessage } from 'vu-design-plus'
import { ref } from 'vue'
import TableProps from '@/components/TableProps/index.vue'
import { dialogProps } from './dialog'
import {VuDialog} from "@vu-design-plus/components";

// 弹框显示隐藏
const showFlag = ref<boolean>(false)

const clickCallback = () => {
  showFlag.value = true
}

const confirmCallback = () => {
  VuMessage.success('点击确认')
  showFlag.value = false
}
</script>

<template>
  <div class="dialog-demo">
    <h2>Dialog 内容弹框</h2>
    <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
    <h3>实例效果</h3>
    <div class="btns" @click="clickCallback">点击弹框</div>
    <h3>Dialog Props</h3>
    <TableProps :component-props="dialogProps"></TableProps>
    <vu-dialog
      title="弹框标题"
      v-model="showFlag"
      @on-confirm="confirmCallback"
    >
      <template #default>
        <span class="red">这是弹框内容</span>
      </template>
    </vu-dialog>
  </div>
</template>

<style lang="scss" scoped></style>
