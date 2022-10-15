import path from 'path'
import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import viteEslint from 'vite-plugin-eslint'

const variablePath = normalizePath(path.resolve('./src/variable.scss'))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
    viteEslint(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`,
      },
    },
  },
})
