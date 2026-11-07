import { createRouter, createWebHistory } from 'vue-router'

import LocalizedPage from '@/routes/LocalizedPage.vue';
import NotFound from '@/routes/404.vue'
//路由表
const routes = [
    { path: '/', component: LocalizedPage, props: { page: 'home' } },//主页
    { path: '/friends', component: LocalizedPage, props: { page: 'friends' } },//友情链接
    { path: '/about', component: LocalizedPage, props: { page: 'about' } },//关于我们
    { path: '/spons', component: LocalizedPage, props: { page: 'spons' } },//捐助
    { path: '/manual', component: LocalizedPage, props: { page: 'manual' } },//使用手册
    { path: '/license', component: ()=> import ('@/routes/license.vue') },//使用协议
    { path: '/blog/:title', component: () => import ('@/routes/blog.vue') },//文章阅读页面
    { path: '/blog', component: () => import ('@/routes/blogs.vue') },//文章列表
    { path: '/blogMdOnly/:title', component: () => import ('@/routes/blog_mdOnly.vue') },//文章阅读页面，删除了其他元素，用于iframe
    { path: '/nct', component: ()=> import ('@/routes/nct.vue') },//No Conversion Therapy
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }//404页面
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
