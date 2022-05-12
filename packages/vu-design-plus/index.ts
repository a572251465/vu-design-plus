import { VuIcon, VuDialog } from '@vu-design-plus/components'
import type { App } from 'vue'

const components = [VuIcon, VuDialog]
const install = (app: App) => {
  components.forEach((component) => app.use(component))
}

export default {
  install
}

export * from '@vu-design-plus/components'
