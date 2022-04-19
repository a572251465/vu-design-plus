import { VuIcon } from '@vu-design/components'
import type { App } from 'vue'

const components = [VuIcon]
const install = (app: App) => {
  components.forEach((component) => app.use(component))
}

export default {
  install
}

export * from '@vu-design/components'
