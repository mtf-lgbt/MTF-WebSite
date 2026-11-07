/*
src/main.js是整个项目的入口文件，主要用于引入各种样式和插件，并创建Vue应用实例。
*/

import 'github-markdown-css/github-markdown.css';//markdown样式类
import './assets/markdown-theme.css'//对上面那个markdown样式类进行修改声明
import './assets/main.css'//主样式
import "@m3e/web/all";//因为现在页面是现加载的，所以如果没有会导致没有这个样式。我也不知道为什么，大概是加载顺序的问题吧
import 'material-symbols/outlined.css';//google的各种图标
import '@fontsource/roboto/400.css'//以下三行是google字体
import '@fontsource/roboto/500.css' 
import '@fontsource/roboto/700.css'

import { createApp } from 'vue'
import i18n from './i18n/i18n.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// 聲明全局變量，建議使用 $ 前綴以區分普通屬性
app.config.globalProperties.$Title = 'HosinoNeko'
app.config.globalProperties.$HeadImageX64px = 'https://avatars.githubusercontent.com/u/177436503?v=4&size=64'

app.use(router)//注冊路由
app.use(i18n)//注冊翻译插件
app.mount('#app')

console.info('你試試點擊五下副標題呢喵？')