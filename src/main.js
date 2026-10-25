import 'github-markdown-css/github-markdown.css';//markdown样式类
import './assets/markdown-theme.css'//对上面那个markdown样式类进行修改声明
import './assets/main.css'//主样式
import "@m3e/web/all";//因为现在页面是现加载的，所以如果没有会导致没有这个样式。我也不知道为什么，大概是加载顺序的问题吧
import 'material-symbols/outlined.css';//google的各种图标
import '@fontsource/roboto/400.css'//以下三行是google字体
import '@fontsource/roboto/500.css' 
import '@fontsource/roboto/700.css'

import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import i18n from './i18n/i18n.js'
import App from './App.vue'

//其他頁面
import LocalizedPage from './routes/LocalizedPage.vue';

import NotFound from './routes/404.vue'

const app = createApp(App)

// 聲明全局變量，建議使用 $ 前綴以區分普通屬性
app.config.globalProperties.$Title = 'HosinoNeko'
app.config.globalProperties.$HeadImageX64px = 'https://avatars.githubusercontent.com/u/177436503?v=4&size=64'

//路由表
const routes = [
    { path: '/', component: LocalizedPage, props: { page: 'home' } },//主页
    { path: '/friends', component: LocalizedPage, props: { page: 'friends' } },//友情链接
    { path: '/about', component: LocalizedPage, props: { page: 'about' } },//关于我们
    { path: '/spons', component: LocalizedPage, props: { page: 'spons' } },//捐助
    { path: '/manual', component: LocalizedPage, props: { page: 'manual' } },//使用手册
    { path: '/license', component: ()=> import ('./routes/license.vue') },//使用协议
    { path: '/blog/:title', component: () => import ('./routes/blog.vue') },//文章阅读页面
    { path: '/blog', component: () => import ('./routes/blogs.vue') },//文章列表
    { path: '/blogMdOnly/:title', component: () => import ('./routes/blog_mdOnly.vue') },//文章阅读页面，删除了其他元素，用于iframe
    { path: '/nct', component: ()=> import ('./routes/nct.vue') },//No Conversion Therapy
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