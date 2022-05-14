import { IFields } from '@/components/TableProps/types'

const messageBoxFields: IFields[] = [
  {
    field: '提示',
    desc: '调用参数中应该是(message) | (message, {callback, ...} | ({callback, ...})), 参数只有三种可能性，如果需要对象参照下列参数',
    type: '-',
    defaultValue: '-'
  },
  {
    field: 'message',
    desc: '提示消息',
    type: 'string',
    defaultValue: '-'
  },
  {
    field: 'htmlTpl',
    desc: '提示消息, 跟message不共存，这个使用v-html来支持，所以支持自定义样式',
    type: 'string',
    defaultValue: '-'
  },
  {
    field: 'callback',
    desc: '成功回调',
    type: 'Function',
    defaultValue: '-'
  },
  {
    field: 'cancelCallback',
    desc: '点击取消的回调',
    type: 'Function',
    defaultValue: '-'
  },
  {
    field: 'cancelButtonText',
    desc: '取消按钮文字',
    type: 'String',
    defaultValue: '取消'
  },
  {
    field: 'confirmButtonText',
    desc: '成功按钮的文字',
    type: 'String',
    defaultValue: '确定'
  }
]

export { messageBoxFields }
