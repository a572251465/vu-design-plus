import type { ExtractPropTypes } from "vue"

/**
 * @author lihh
 * @description 定义icon props类型
 */
export const iconProps = {
  // 表示icon 大小
  size: {
    type: [Number, String],
    default: 16
  },
  // 表示icon 颜色
  color: {
    type: String,
    default: "black"
  },
  // 表示icon类型
  type: {
    type: String,
    required: true
  }
}

export type IIconTypes = ExtractPropTypes<typeof iconProps>
