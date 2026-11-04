
import blogs from './blogs.js'

const enuk = {
    routes: {
        blogs
    },
    components: {
        header: {
            home: 'Home',
            backToTop: 'Back to Top',
            friends: 'Friends',
            about: 'About This Site',
            blogs: 'Blog Posts',
            setting: 'Settings'
        },
        setting: {
            title: 'Settings',
            language: 'Language',
            color: 'Colour Settings',
            schemes: 'Colour Schemes',
            contrast: 'Contrast',
            bannerHeight: 'Banner Height'
        },
        footer: {
            getSupport: 'Get Support',
        },
        banner: {
            title: 'To All Transgender People',
        },
        statusRT: {
            allLinks: {
                title: 'All Links',
                thisSite: 'This Site',
                friends: 'Friends',
                blogList: 'Blog Posts',
                about: 'About This Site',
                manual: 'User Manual'
            }
        }
    }
}

export default enuk;