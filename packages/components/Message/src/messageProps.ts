import { CSSProperties, ExtractPropTypes, PropType } from 'vue'
export const messageType = () =>
  'success' || 'warning' || 'danger' || 'info' || 'dark'
export type IType = ReturnType<typeof messageType>
import type { VNode } from 'vue'

export const messageProps = {
  message: {
    type: String,
    required: true
  },
  type: {
    type: String as PropType<IType>,
    default: 'success'
  },
  icon: {
    type: String,
    default: ''
  },
  showClose: {
    type: Boolean,
    default: false
  },
  autoClose: {
    type: Boolean,
    default: true
  },
  customClass: {
    type: String,
    default: ''
  },
  style: {
    type: Object as PropType<CSSProperties>,
    default: () => ({})
  },
  onClose: {
    type: Function,
    default: () => ({})
  },
  offset: {
    type: Number,
    default: 20
  },
  delay: {
    type: Number,
    default: 2000
  }
}

export type IMessageTypes = ExtractPropTypes<typeof messageProps>

export type ITransformOptions = Partial<Omit<IMessageTypes, 'message'>> &
  Pick<IMessageTypes, 'message'>

export type ISingleMessage = (options: ITransformOptions | string) => void
export type IMessage = ISingleMessage & {
  [K in IType as K]: ISingleMessage
}

export type IMessageQueue = {
  vm: VNode
  $el: HTMLElement
  id: number
  height: 0
}

export interface IMessageOptions {
  danger: (message: string | ITransformOptions) => any
  success: (message: string | ITransformOptions) => any
}
