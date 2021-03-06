import { ExtractPropTypes } from 'vue'

type Partial<T> = {
  [K in keyof T]?: T[K]
}

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
  isDel: {
    type: Boolean,
    default: false
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

export interface IOptions {
  (
    message: string | Partial<IMessageBoxProps>,
    options?: Partial<IMessageBoxProps>,
    isDel?: boolean
  ): any
}

export interface IMessageBoxInstance {
  delete: IOptions
  danger: IOptions
}
