<template>
    <transition name="setting">
        <m3e-dialog dismissible id="settingPage">
                <span slot="header">{{ $t('components.setting.title') }}</span>
                <div class="settingGroup">
                    <label>
                        <m3e-icon slot="icon" name="globe"></m3e-icon>
                        {{ $t('components.setting.language') }}
                    </label>
                    <m3e-segmented-button>
                        <m3e-button-segment
                            v-for="lang in langs"
                            :key="lang.code"
                            @click="switchLang(lang.code)"
                            :checked="locale === lang.code"
                        >
                            {{ lang.label }}
                        </m3e-button-segment>
                    </m3e-segmented-button>
                </div>
        </m3e-dialog>
    </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Cookies from 'js-cookie'
import "@m3e/web/segmented-button";
import "@m3e/web/dialog";

const { locale } = useI18n()

const isOpen = ref(false)

const toggleMenu = () => { isOpen.value = !isOpen.value }
const closeMenu  = () => { isOpen.value = false }

// 语言切换相关
const COOKIE_KEY = 'locale'
const COOKIE_OPTS = { expires: 365, sameSite: 'Lax', path: '/' }

const langs = [
    { code: 'zhcn', label: '简体中文' },
    //{ code: 'enus', label: 'English' },
    { code: 'ja',   label: '日本語' }
]
const switchLang = (code) => {
    locale.value = code, // 切换语言
    Cookies.set(COOKIE_KEY, code, COOKIE_OPTS) // 保存到 Cookie
}

onMounted(() => {
    // 读取 cookie，校验合法性后恢复
    const saved = Cookies.get(COOKIE_KEY)
    if (saved && langs.some(l => l.code === saved)) {
        locale.value = saved
    }
    window.addEventListener('toggle-setting-menu', toggleMenu)
})
onUnmounted(() => {
    window.removeEventListener('toggle-setting-menu', toggleMenu)
})
</script>

<style scoped>
.settingGroup{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
}
.settingGroup label{
    flex: 0 0 auto;
    min-width: 100px;
    white-space: nowrap;
}
</style>