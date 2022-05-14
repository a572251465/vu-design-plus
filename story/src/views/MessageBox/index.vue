<script lang="ts" setup>
import { VuMessage, VuMessageBox } from '@vu-design-plus/components'
import TableProps from '@/components/TableProps/index.vue'
import { messageBoxFields } from './messageBox'

const confirmCallback = () => {
  VuMessageBox.danger('人数过多, 您还不能删除?')
}

const deleteCallback = () => {
  VuMessageBox.delete('您确认要删除吗', {
    callback: () => VuMessage.success('删除成功')
  })
}

const selfConfirmCallback = () => {
  VuMessageBox.danger({
    htmlTpl: `<div class = "red">人数过多, 您还不能删除?</div>`
  })
}

const selfDeleteCallback = () => {
  VuMessageBox.delete({
    htmlTpl: `<div class = "red">您确认要删除吗</div>`,
    callback: () => VuMessage.success('删除成功')
  })
}
</script>

<template>
  <div class="message-box-demo">
    <h2>MessageBox 消息确认提示提示</h2>
    <p>专门为做某些事情之前设置的指令，分为删除以及确认状态</p>
    <h3>实例效果</h3>
    <div>
      <button @click="confirmCallback">点击确认</button>
      <button @click="deleteCallback">点击删除</button>
      <button @click="selfConfirmCallback">自定义模板 点击确认</button>
      <button @click="selfDeleteCallback">自定义模板 点击删除</button>
    </div>
    <h3>提示</h3>
    <div class="tips-block">
      <p>TIP</p>
      <ul>
        <li>
          使用danger指令一般都是在需要删除的是时候，但是某种情况下不能删除,
          此时可以用到VuMessageBox.danger指令，此指令只需要message,
          反而不需要回调
        </li>
        <li>
          使用delete指令一般都是在需要删除的是时候，直接调用指令,
          此时可以用到VuMessageBox.delete指令，此指令需要消息以及需要回调
        </li>
      </ul>
    </div>
    <h3>代码示例</h3>
    <div class="code">
      <div>import {VuMessageBox} from 'vu-design-plus'</div>
      <div>VuMessageBox.danger(message)</div>
      <div>VuMessageBox.delete(message, {callback})</div>
      <div>VuMessageBox.danger({htmlTpl: message})</div>
      <div>VuMessageBox.delete({htmlTpl: message, callback})</div>
    </div>
    <h3>MessageBox Props</h3>
    <TableProps :component-props="messageBoxFields"></TableProps>
  </div>
</template>
