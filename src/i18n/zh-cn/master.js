import home from './home.js'
import friends from './friends.js'

const zhcn = {
    routes: {
        home,
        friends,
        blogs: {
            menuView: {
                recommend: '推荐阅读',
                allblogs: '所有文章',
            },
            tagAll: '全部',
            outLine: '文章大纲',
            author: '作者',
            releaseDate: '发布日期',
            language: '语言',
            NoRelatedAvailable: '暂无相关内容',
            viewOtherBlogs: '←查看其他文章',
        }
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
            language: '语言'
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
            }
        }
    }
}

export default zhcn;