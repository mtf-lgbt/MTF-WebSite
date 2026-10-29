import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import viteString from 'vite-plugin-string'
import Markdown from 'unplugin-vue-markdown/vite'
import anchor from 'markdown-it-anchor'
import toc from 'markdown-it-toc-done-right'
import seoFiles from 'vite-plugin-seo-files';//SEO

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      Markdown({
        include: 'src/routes/**/*.md',
        markdownItOptions: {
          typographer: false,
        },
        markdownItSetup(md) {
          md.use(anchor)
          md.use(toc, { containerClass: 'toc' })
        },
        // html: true 等选项按需补充
      }),
      vue({
        include: [/\.vue$/, /\.md$/],
        template: {
          compilerOptions: {
            // 将所有以 m3e- 开头的标签视为自定义元素
            isCustomElement: (tag) => tag.startsWith('m3e-')
          }
        }
      }),
      vueDevTools(),
      seoFiles({
        siteUrl: 'https://mtf.lgbt',
      }),
      viteString({
        include: '**/*.md',
        exclude: 'src/routes/**/*.md'
      }),
    ],
    // 完美的动态 Base 配置：build 时用 /blog/，本地 dev 用 /
    base: '/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
  }
})
