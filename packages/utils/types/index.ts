import type { Plugin, App } from 'vue'

export type SFCWithInstall<T> = T & Plugin
export type ICommonInstall<T> = SFCWithInstall<T> &
  {
    install?: (app: App) => void
  } & { name?: string }

/**
 * @author lihh
 * @description 导出包装类型
 * @param component 表示组件实例
 */
export const withInstall = <T>(component) => {
  (component as ICommonInstall<T>).install = function(app) {
    app.component(component.name, component)
  }
  return component
}

export interface IInstallOptions {
  zIndex: number
}
