import { getConfig } from '@vu-design/utils'

const zIndexCache: number[] = []

/**
 * @author lihh
 * @description 获取当前的zIndex
 */
const useZIndex = () => {
  if (zIndexCache.length === 0) {
    const startZIndex = getConfig('zIndex') || 2000
    zIndexCache.push(startZIndex)
    return startZIndex
  } else {
    const lastZIndex = zIndexCache[zIndexCache.length - 1]
    const finallyZIndex = lastZIndex + 20
    zIndexCache.push(finallyZIndex)
    return finallyZIndex
  }
}
export default useZIndex
