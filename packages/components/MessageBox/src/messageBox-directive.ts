import { createVNode, nextTick, render } from 'vue'
import messageBoxInstance from './messageBox.vue'
import {
  IOptions,
  ICacheMessageBoxInstance,
  IMessageBoxInstance
} from './messageBoxProps'
import messageBox from './messageBox.vue'

let messageBoxId = 0
const cacheMessageBoxInstance: ICacheMessageBoxInstance = {}

const MessageBox: IOptions = (message, options = {}, isDel) => {
  options.message = message

  messageBoxId += 1
  const currentMessageBoxId = messageBoxId
  const el = document.createElement('div')
  el.id = `dialog-popup-${currentMessageBoxId}`

  // ---------------------- 进行函数重写  ------------------
  const userCallback = options.callback || Function.prototype
  const commonCallback = async () => {
    const { el } = cacheMessageBoxInstance[currentMessageBoxId]
    render(null, el)
    await nextTick(() => document.body.removeChild(el))
    Reflect.deleteProperty(cacheMessageBoxInstance, currentMessageBoxId)
  }
  options = {
    ...options,
    isDel,
    cancelButtonText: isDel ? '取消' : '确定',
    confirmButtonText: isDel ? '删除' : '取消',
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
;(['danger', 'delete'] as const).forEach((classify) => {
  /**
   * @desc 展示不同的表现形式
   * VuMessageBox.delete('确定删除吗', {callback})
   * VuMessageBox.delete({htmlTpl: '确定删除吗?', callback})
   */
  messageBox[classify] = function (message, options = {}) {
    // 如果htmlTpl 存在的话 message可以不存在
    if (message && typeof message === 'object') {
      options = message
      message = ''
    }
    return MessageBox(message, options, classify === 'delete')
  }
})

export default messageBox as IMessageBoxInstance
