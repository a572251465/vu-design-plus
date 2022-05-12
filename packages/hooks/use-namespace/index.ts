/**
 * @author lihh
 * @description 全局控制workspace
 * @param type 表示workspace 類型
 */
import { namespace } from "@vu-design-plus/utils"

/**
 * @author lihh
 * @description 统一规范命令空间
 * @param type 表示组件类型
 */
export const useNamespace = (type: string): string => `${namespace}-${type}`
