import { IFields } from '@/components/TableProps/types'

const messageFields: IFields[] = [
  {
    field: 'success',
    desc: '当成功时调用的指令',
    type: '-',
    defaultValue: 'VuMessage.success(XXX)'
  },
  {
    field: 'danger',
    desc: '当失败时调用指令',
    type: '-',
    defaultValue: 'VuMessage.danger(XXX)'
  }
]

export { messageFields }
