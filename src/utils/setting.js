// src/utils/theme.js
import { ref, watch } from 'vue'
import Cookies from 'js-cookie'

const COOKIE_CONFIG = { 
    expires: 365,
    sameSite: 'Lax',
    path: '/'
}

const KEY_COLOR = 'BackgroundColor'
const KEY_SCHEMES = 'ColorSchemes'
const KEY_LANG = 'lang'
const KEY_CONTRAST = 'Contrast'
const KEY_BANNER_HEIGHT = 'BannerHeight'

const saved = Cookies.get(KEY_COLOR)
export const BgColor = ref(/^#[0-9a-fA-F]{6}$/.test(saved) ? saved : '#3388bb')
export const Schemes = ref(Cookies.get(KEY_SCHEMES) || 'auto')
export const LANG = ref(Cookies.get(KEY_LANG) || 'zhcn')
export const CONTRAST = ref(Cookies.get(KEY_CONTRAST) || 'standard')
export const BANNER_HEIGHT = ref(Cookies.get(KEY_BANNER_HEIGHT) || 'calc(100vh - 66px)')

watch(BgColor, (color, schemes) => {//种子色
    Cookies.set(KEY_COLOR, color, COOKIE_CONFIG)
})
watch(Schemes, (scheme) => {//配色方案（黑色模式和白色模式）
    Cookies.set(KEY_SCHEMES, scheme, COOKIE_CONFIG)
})
watch(LANG, (lang) => {//语言
    Cookies.set(KEY_LANG, lang, COOKIE_CONFIG)
})
watch(CONTRAST, (contrast) => {//对比度
    Cookies.set(KEY_CONTRAST, contrast, COOKIE_CONFIG)
})
watch(BANNER_HEIGHT, (bannerHeight) => {//对比度
    Cookies.set(KEY_BANNER_HEIGHT, bannerHeight, COOKIE_CONFIG)
})