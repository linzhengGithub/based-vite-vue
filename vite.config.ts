import path from 'path'
import { defineConfig, normalizePath } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import viteEslint from 'vite-plugin-eslint'
import viteImagemin from 'vite-plugin-imagemin'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const variablePath = normalizePath(path.resolve('./src/variable.scss'))

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: '/',
    resolve: {
    // 别名配置
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.join(__dirname, 'src/assets'),
      },
    },
    plugins: [
      vue(),
      Unocss(),
      viteEslint(),
      createSvgIconsPlugin({
        iconDirs: [path.join(__dirname, 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteImagemin({
        // 无损压缩配置，无损压缩下图片质量不会变差
        optipng: {
          optimizationLevel: 7,
        },
        // 有损压缩配置，有损压缩下图片质量可能会变差
        pngquant: {
          quality: [0.8, 0.9],
        },
        // svg 优化
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
          additionalData: `@import "${variablePath}";`,
        },
      },
    },
    build: {
      /**
       * 静态文件的构建方式：单文件 和 通过base64编码的格式内嵌至代码中
       * vite默认
       * 如果静态资源体积 >= 4KB，则提取成单独的文件
       * 如果静态资源体积 < 4KB，则作为 base64 格式的字符串内联
       */
      // 临界值: >=8kb 提取为单文件,<8kb 提取为base64格式的字符串内联
      assetsInlineLimit: 8 * 1024,
    },
  }
})
