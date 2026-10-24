import friends from './friends.js'
import blogs from './blogs.js'

const zhcn = {
    routes: {
        friends,
        blogs
    },
    components: {
        header: {
            home: '主页',
            backToTop: '回到顶部',
            friends: '友链',
            about: '关于本站',
            blogs: '文章',
            setting: '设置'
        },
        setting: {
            title: '设置',
            language: '语言',
            color: '颜色设置',
            schemes: '配色方案',
            contrast: '对比度',
            bannerHeight: '横幅高度'
        },
        footer: {
            getSupport: '获取支持',
        },
        banner: {
            title: '致全体跨性别者',
        },
        statusRT: {
            allLinks: {
                title: '所有链接',
                thisSite: '本站',
                friends: '友链',
                blogList: '文章列表',
                about: '关于本站',
                manual: '使用手册'
            }
        }
    }
}

export default zhcn;