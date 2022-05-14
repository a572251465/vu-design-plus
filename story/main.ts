import { createApp } from 'vue'
import App from './App.vue'
import VuDialog from '@vu-design-plus/components/Dialog'
import '@vu-design-plus/theme-chalk/src/index.scss'
import router from './src/router'
import '@/assets/css/common.css'

// 进行root节点的挂载
const app = createApp(App)
app.use(VuDialog)
app.use(router)
app.mount('#app')
