import { withInstall } from '@vu-design/utils/types'
import Icon from './src/icon.vue'

export * from './src/iconProp'
const VuIcon = withInstall({ ...Icon, name: 'VuIcon' })

export { VuIcon }
export default VuIcon
