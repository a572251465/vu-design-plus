<script lang="ts" setup>
import { VuMessage } from 'vu-design-plus'
import TableProps from '@/components/TableProps/index.vue'
import { messageFields } from './message'

const successCallback = () => VuMessage.success('我成功了')

const failCallback = () => VuMessage.danger('我失败了')
</script>

<template>
  <div class="message-demo">
    <h2>Message 消息提示</h2>
    <p>
      提供了一套暗黑色主题的成功以及失败消息状态。只是作为消息提示，如果想使用确认消息请看MessageBox
    </p>
    <h3>实例效果</h3>
    <div class="flex">
      <div class="btns" @click="successCallback">点我成功</div>
      <div class="btns" @click="failCallback">点我失败</div>
    </div>
    <h3>代码示例</h3>
    <div class="code">
      <div>import {VuMessage} from 'vu-design-plus'</div>
      <div>const successCallback = () => VuMessage.success('我成功了')</div>
      <div>const successCallback = () => VuMessage.danger('我失败了')</div>
    </div>
    <h3>Message Props</h3>
    <TableProps :component-props="messageFields"></TableProps>
  </div>
</template>
