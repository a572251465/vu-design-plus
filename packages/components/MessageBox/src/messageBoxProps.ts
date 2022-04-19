import { ExtractPropTypes } from 'vue'

export const messageBoxProps = {
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
  htmlTpl: {
    type: String,
    default: ''
  },
  callback: {
    type: Function,
    default: () => ({})
  },
  cancelCallback: {
    type: Function,
    default: () => ({})
  },
  cancelButtonText: {
    type: String,
    default: '取消'
  },
  confirmButtonText: {
    type: String,
    default: '确定'
  }
}

export interface ICacheMessageBoxInstance<T = { el: HTMLDivElement }> {
  [key: string]: T
}

export type IMessageBoxProps = ExtractPropTypes<typeof messageBoxProps>

export interface IAlert {
  (message: string, title: string, options: Partial<IMessageBoxProps>): void
}
export interface IMessageBoxInstance {
  alert?: IAlert
}
