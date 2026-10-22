import { createI18n } from 'vue-i18n';
//import enus from './en.js'
import zhcn from './zh-cn/master.js'
import ja from './ja/master.js'
const i18n = createI18n({
    legacy: false,
    locale: 'zhcn', // 默认语言
    fallbackLocale: 'zhcn',// 备用语言
    legacy: false, // 使用组合式 API 必须设为 false
    globalInjection: true, // 允许在模板中直接使用 $t
    messages: {
        zhcn,
        ja
        //enus
    },
});

export default i18n;