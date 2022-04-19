import { App } from 'vue'
import VuMessageBox from './src/messageBox-directive'
import { ICommonInstall } from '@vu-design/utils/types'
;(VuMessageBox as ICommonInstall<any>).install = (app: App): void => {
  app.config.globalProperties.$MessageBox = VuMessageBox
}

export { VuMessageBox }
export default VuMessageBox
