import {
  IMessage,
  IMessageQueue,
  ITransformOptions,
  IMessageOptions
} from './messageProps'
import { createVNode, nextTick, render } from 'vue'
import instance from './message.vue'

let messageId = 0
const messageQueue: IMessageQueue[] = []

/**
 * @author lihh
 * @description 表示重写后的关闭方法
 * @param id
 */
const useClose = async (id: number) => {
  const index = messageQueue.findIndex((item) => item.id === id)
  if (!~index) return

  const { $el, height: removeH } = messageQueue[index]

  // 删除页面中节点
  render(null, $el)
  await nextTick(() => document.body.removeChild($el))

  // 判断是否只有一个元素
  if (messageQueue.length === 1) {
    messageQueue.length = 0
    return
  }
  messageQueue.splice(index, 1)

  // 元素删除后重新计算高度
  let currentI = index
  for (; currentI < messageQueue.length; currentI += 1) {
    const { vm } = messageQueue[currentI]
    vm.component!.props.offset = parseInt(vm.el!.style.top, 10) - removeH - 16
  }
}

/**
 * @author lihh
 * @description 表示弹出消息实例
 * @param options 传递的参数
 */
// @ts-ignore
const messageInstance: IMessage = (options) => {
  if (typeof options === 'string')
    options = { message: options, icon: 'success' }

  // 用来生成真实的dom
  const id = `message-root-${messageId}`
  const removeId = messageId
  const element = document.createElement('div')
  element.id = id

  // 计算弹框出框的偏移量
  let verticalOffset = options.offset || 20
  // 需要在所有的消息上进行计算
  messageQueue.forEach(({ vm }) => {
    verticalOffset += (vm.el!.offsetHeight || 0) + 16
  })
  verticalOffset += 16
  options.offset = verticalOffset

  // 重写用户的close方法
  const userClose = options.onClose || (() => ({}))
  options = {
    ...options,
    onClose: async () => {
      userClose()
      await useClose(removeId)
    }
  }

  // 渲染虚拟dom
  const vNode = createVNode(instance, options)
  render(vNode, element)
  document.body.appendChild(element)
  nextTick(() => {
    messageQueue.push({
      vm: vNode,
      $el: element,
      id: removeId,
      height: vNode.el!.offsetHeight
    })
  })
  messageId += 1
}

// --------------------- 循环赋值渲染 success, danger 组件 -------------------
;(['success', 'danger'] as const).forEach((classify) => {
  messageInstance[classify] = function (options: ITransformOptions | string) {
    if (typeof options === 'string') {
      options = {
        type: classify,
        message: options
      }
    }
    if (!options.icon) options.icon = classify
    if (!options.type) options.type = classify
    return messageInstance(options)
  }
})

export default messageInstance as IMessageOptions
