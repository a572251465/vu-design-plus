<script lang="ts" setup>
import { VuMessage, VuMessageBox } from '@vu-design/components'
const btns = ['success', 'danger']

const clickMessageHandle = (item) => {
  VuMessage[item](`授权失败：授权码错误11111`)
}
const messageBoxHandle = () => {
  VuMessageBox.delete('请为“系统管理员”角色下的成员创建新角色', '提示', {
    callback: () => {
       alert('你成功了')
    }
  })
}

const messageBoxHandle1 = () => {
  VuMessageBox.danger('请为“系统管理员”角色下的成员创建新角色', {
    callback: () => {
      alert('小伙子 你成功了')
    },
    htmlTpl: (() => `
      <div>确定要将“<span class='bold'>图表名称</span>”删除吗</div>
    `)()
  })
}
</script>

<template>
  <div>
    <h1>icon 组件</h1>
    <VuIcon type="loading" />
    <h1>消息弹框</h1>
    <div>
      <button
        v-for="item in btns"
        :key="item"
        @click="clickMessageHandle(item)"
      >
        点击message 消息框--{{ item }}
      </button>
    </div>
    <h1>点击messagebox</h1>
    <div>
      <button @click="messageBoxHandle">点击 messagebox</button>
    </div>
    <h1>自定义html-点击messagebox</h1>
    <div>
      <button @click="messageBoxHandle1">点击 messagebox</button>
    </div>
  </div>
</template>

<style>
.bold {
  font-weight: bold;
}
</style>
