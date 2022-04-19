import { ExtractPropTypes, PropType } from 'vue'

const dialogProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  existBtns: {
    type: Array as PropType<string[]>,
    default: ['cancel', 'confirm']
  },
  width: {
    type: [Number, String],
    default: 400
  },
  confirmBtnText: {
    type: String,
    default: '确认'
  },
  cancelBtnText: {
    type: String,
    default: '取消'
  }
}

export { dialogProps }
export type IDialogProps = ExtractPropTypes<typeof dialogProps>
