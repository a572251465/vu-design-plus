import { styleCommonPrefix } from '@vu-design/utils'

/**
 * @author lihh
 * @description 进行类名称
 * @param namespaceName 表示命令空间前缀部分
 */
const computedClassName = (namespaceName: string) => (names: string[]) => {
  let str = namespaceName
  str = names.reduce(
    (pre, cur) => `${pre}${styleCommonPrefix.$elementSeparator}${cur}`,
    str
  )
  return str
}

export default computedClassName
