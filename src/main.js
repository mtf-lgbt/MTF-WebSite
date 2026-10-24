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

import Friends from './routes/friends.vue'
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
    { path: '/', component: LocalizedPage, props: { page: 'home' } },
    { path: '/friends', component: Friends },
    { path: '/license', component: license },
    { path: '/blog', component: blogs },
    { path: '/blog/:title', component: blog },
    { path: '/blogMdOnly/:title', component: blogMdOnly },
    { path: '/nct', component: nct },
    { path: '/about', component: LocalizedPage, props: { page: 'about' } },
    { path: '/spons', component: LocalizedPage, props: { page: 'spons' } },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(router)//注冊路由
app.use(i18n)//注冊翻译插件
app.mount('#app')

console.info('你試試點擊五下副標題呢喵？')