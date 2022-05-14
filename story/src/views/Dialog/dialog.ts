import { IFields } from '@/components/TableProps/types'

const dialogProps: IFields[] = [
  {
    field: 'modelValue',
    type: 'Boolean',
    desc: '响应式弹框显隐变量',
    defaultValue: 'false'
  },
  {
    field: 'title',
    type: 'String',
    desc: '标题',
    defaultValue: '-'
  },
  {
    field: 'existBtns',
    type: 'Array',
    desc: '需要存在的按钮，如果想要确认按钮存在直接传值为: ["confirm"]',
    defaultValue: `['cancel', 'confirm']`
  },
  {
    field: 'width',
    type: '[Number, String]',
    desc: '弹框显示宽度',
    defaultValue: '400'
  },
  {
    field: 'confirmBtnText',
    type: 'String',
    desc: '确认按钮内容',
    defaultValue: '确认'
  },
  {
    field: 'cancelBtnText',
    type: 'String',
    desc: '取消按钮内容',
    defaultValue: '取消'
  }
]

export { dialogProps }
