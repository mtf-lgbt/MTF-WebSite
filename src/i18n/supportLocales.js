/*
src/i18n/supportLocales.js
这个文件用于定义支持的语言和地区变体。它是一个对象，键是主语言代码，值是一个数组，包含该语言支持的地区变体代码。
例如：
{
    zh: ['cn'], // 中文支持中国大陆地区
    en: ['uk'], // 英文支持英国地区
    ja: []      // 日文没有地区变体
}
在i18n.js中，我们会使用这个对象来解析浏览器的语言设置，选择最合适的语言和地区变体。
*/

const SUPPORT_LOCALES = {
    zh:[
        'cn'
    ],
    en: [
        'uk'
    ],
    ja:[]
}

export default SUPPORT_LOCALES