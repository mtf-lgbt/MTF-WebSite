/*
src/i18n/i18n.js
这个文件用于配置和创建 Vue I18n 实例。它会根据用户的浏览器语言设置和 cookie 中保存的语言偏好，选择最合适的语言和地区变体。
*/

import { createI18n } from 'vue-i18n';
import { LANG } from '@/utils/setting'//查看src/utils/setting.js，LANG是从cookie中获取的语言设置
import enuk from './en-uk/master'
import zhcn from './zh-cn/master.js'
import ja from './ja/master.js'
import SUPPORT_LOCALES from './supportLocales.js'

function resolveLocale(browserLang) {
    // "en-US" -> ["en", "us"]；"ja" -> ["ja"]
    // 另外我知道有傻逼老浏览器用zh_Hans这种死妈格式，但是我都用vue了还有必要么。至少是说在逻辑上我是不想管这茬
    const [lang, region] = (browserLang || '').toLowerCase().split('-')
    // 第一层：主语言不受支持 -> 默认
    if (!(lang in SUPPORT_LOCALES)) {
        return DEFAULT_LOCALE
    }
    const variants = SUPPORT_LOCALES[lang]
    // 无变体（如 ja）-> 直接用主语言
    if (variants.length === 0) {
        return lang
    }
    // 第二层：地区受支持 -> lang + region
    if (region && variants.includes(region)) {
        return lang + region   // en + us = enus
    }
    // 地区不受支持 -> 用第一个变体
    return lang + variants[0]  // en + uk = enuk
}

const fromCookie = LANG.value
const fromBrowser = resolveLocale(navigator.language)
const initial = fromCookie || fromBrowser

//console.log('处理前：', navigator.language, '处理后：', fromBrowser, '最终使用：', initial);

const i18n = createI18n({
    locale: initial, // 默认语言
    fallbackLocale: 'zhcn',// 备用语言
    legacy: false, // 使用组合式 API 必须设为 false
    globalInjection: true, // 允许在模板中直接使用 $t
    messages: {
        zhcn,
        ja,
        enuk
    },
});

export default i18n;