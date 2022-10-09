import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import Unocss from 'unocss/vite'

const variablePath = normalizePath(path.resolve('./src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    }
  }
})
