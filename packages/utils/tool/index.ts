import { IInstallOptions } from '../types'

const $Element = {}

/**
 * @author lihh
 * @description 判单是否是undefined
 * @param value 传递值
 */
import { defaultLenUnit } from '../define'

export const isUndefined = (value: any) => typeof value === 'undefined'

/**
 * @author lihh
 * @description 用来添加单位
 * @param value 表示需要判断的值
 * @param defaultUnit 默认的单位
 */
export const addUnit = (value: string | number, defaultUnit = 'px'): string => {
  if (typeof value === 'string') {
    if (defaultLenUnit.some((item) => value.endsWith(item))) return value
  }
  return `${value}${defaultUnit}`
}

/**
 * @author lihh
 * @description 设置全局变量
 * @param option 设置参数
 */
export const setConfig = (option: IInstallOptions) => {
  Object.entries(option).forEach(([value, key]) => {
    $Element[key] = value
  })
}

/**
 * @author lihh
 * @description 获取全局配置
 * @param key 获取key值
 */
export const getConfig = (key: keyof IInstallOptions) => $Element[key]
