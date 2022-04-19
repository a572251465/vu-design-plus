import { createVNode, nextTick, render } from 'vue'
import messageBoxInstance from './messageBox.vue'
import {
  IAlert,
  ICacheMessageBoxInstance,
  IMessageBoxInstance,
  IMessageBoxProps
} from './messageBoxProps'
import messageBox from './messageBox.vue'

let messageBoxId = 0
const cacheMessageBoxInstance: ICacheMessageBoxInstance = {}

const MessageBox: IAlert = (message, title, options = {}) => {
  options.message = message
  options.title = title

  messageBoxId += 1
  const currentMessageBoxId = messageBoxId
  const el = document.createElement('div')
  el.id = `dialog-popup-${currentMessageBoxId}`

  // ---------------------- 进行函数重写  ------------------
  const userCallback = options.callback!
  const commonCallback = async () => {
    const { el } = cacheMessageBoxInstance[currentMessageBoxId]
    render(null, el)
    await nextTick(() => document.body.removeChild(el))
    Reflect.deleteProperty(cacheMessageBoxInstance, currentMessageBoxId)
  }
  options = {
    ...options,
    callback: async () => {
      await commonCallback()
      userCallback()
    },
    cancelCallback: commonCallback
  }

  // --------------------- 挂载元素 --------------------------------
  const vNode = createVNode(messageBoxInstance, options)
  render(vNode, el)
  document.body.appendChild(el)
  nextTick(() => {
    cacheMessageBoxInstance[currentMessageBoxId] = { el }
  })
}

// ------------------------- 单独设置alert属性 ----------------------
;(['alert'] as const).forEach((classify) => {
  messageBox[classify] = function (message, title, options = {}) {
    // 如果htmlTpl 存在的话 message可以不存在
    if (title && typeof title === 'object') {
      options = title
      title = message
      message = ''
    }
    return MessageBox(message, title, options)
  }
})

export default messageBox
