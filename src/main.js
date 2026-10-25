import 'github-markdown-css/github-markdown.css';
import './assets/markdown-theme.css'

import './assets/main.css'
import './assets/ctrl.css'
import 'material-symbols/outlined.css';
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css' 
import '@fontsource/roboto/700.css'

import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import i18n from './i18n/i18n.js'
import App from './App.vue'

//其他頁面
import LocalizedPage from './routes/LocalizedPage.vue';

import NotFound from './routes/404.vue'
import license from './routes/license.vue'
import blogs from './routes/blogs.vue'
import blog from './routes/blog.vue'
import blogMdOnly from './routes/blog_mdOnly.vue'
import nct from './routes/nct.vue'

const app = createApp(App)




// 聲明全局變量，建議使用 $ 前綴以區分普通屬性
app.config.globalProperties.$Title = 'HosinoNeko'
app.config.globalProperties.$HeadImageX64px = 'https://avatars.githubusercontent.com/u/177436503?v=4&size=64'

//路由表
const routes = [
    //{ path: '/', component: Home },
    { path: '/', component: LocalizedPage, props: { page: 'home' } },//主页
    { path: '/friends', component: LocalizedPage, props: { page: 'friends' } },//关于我们
    //{ path: '/friends', component: Friends },//友情链接
    { path: '/license', component: license },//使用协议
    { path: '/blog', component: blogs },//文章阅读页面
    { path: '/blog/:title', component: blog },//文章列表
    { path: '/blogMdOnly/:title', component: blogMdOnly },//文章阅读页面，删除了其他元素，用于iframe
    { path: '/nct', component: nct },//No Conversion Therapy
    { path: '/about', component: LocalizedPage, props: { page: 'about' } },//关于我们
    { path: '/spons', component: LocalizedPage, props: { page: 'spons' } },//捐助
    { path: '/manual', component: LocalizedPage, props: { page: 'manual' } },//使用手册
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }//404页面
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(router)//注冊路由
app.use(i18n)//注冊翻译插件
app.mount('#app')

console.info('你試試點擊五下副標題呢喵？')