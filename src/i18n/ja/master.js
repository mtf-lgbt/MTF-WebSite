import home from './home.js'
import friends from './friends.js'
import blogs from './blogs.js'

const ja = {
    routes: {
        home,
        friends,
        blogs
    },
    components: {
        header: {
            home: 'ホームページ',
            backToTop: 'トップに戻る',
            friends: '友達リンク',
            about: 'サイトについて',
            blogs: '文章',
            setting: '設定'
        },
        setting: {
            title: '設定',
            language: '言語',
            color: '色の配置',
            schemes: '配色',
            contrast: '対比度',
            bannerHeight: 'バナーの高さ'
        },
        footer: {
            getSupport: 'サポートを受ける',
        },
        banner: {
            title: 'トランスジェンダーのみんなへ',
        },
        statusRT: {
            allLinks: {
                title: 'すべてのリンク',
                thisSite: '当サイト',
                friends: '友達リンク',
                blogList: '記事メニュー',
                about: 'サイトについて',
            }
        }
    }
}

export default ja;