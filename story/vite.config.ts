/**
 * @author lihh
 * @description 配置打包的测试文件
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'

import path from 'path'

export default defineConfig({
  plugins: [jsx(), vue()],
  // base: '/vu-design-plus',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: path.resolve(__dirname, 'docs'),
    sourcemap: true
  }
})
