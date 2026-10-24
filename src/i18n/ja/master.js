import home from './home.js'
import friends from './friends.js'

const zhcn = {
    routes: {
        home,
        friends,
        blogs: {
            menuView: {
                recommend: 'おすすめ',
                allblogs: 'すべての文章',
            },
            tagAll: '全部',
            outLine: '記事の概要',
            author: '作者',
            releaseDate: '公開日',
            language: '言語',
            NoRelatedAvailable: '関連するコンテンツがありません',
            viewOtherBlogs: '←他の記事を查看',
        }
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

export default zhcn;