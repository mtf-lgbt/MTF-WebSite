<template>
    <transition name="setting">
        <div class="settingPage div" id="settingPage" v-show="isOpen">
            <button id="closeBtn" button="2" @click="closeMenu">關閉</button>
            <div class="settingPanel">
                <h2>{{ $t('components.setting.title') }}</h2>
                <div class="settingGroup">
                    <label>{{ $t('components.setting.language') }}</label>
                    <div class="sizeButtons">
                        <button
                            v-for="lang in langs"
                            :key="lang.code"
                            @click="switchLang(lang.code)"
                            :button="locale === lang.code ? '2' : '1'"
                        >
                            {{ lang.label }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Cookies from 'js-cookie'

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
.settingPage{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100000000;
    width: 50%;
    height: 50%;
    padding: 20px;
}
.settingPanel{
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
}
.settingPanel h2{
    grid-column: 1 / -1;
    margin: 0 0 16px;
}
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
.settingGroup .sizeButtons{
    flex: 1 1 0;
    min-width: 180px;
    display: flex;
    gap: 8px;
}
.sizeButtons button{
    flex: 1 1 auto;
}
#closeBtn{
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 10001;
}
/* 进出场动画 */
.setting-enter-active,
.setting-leave-active { transition: all .3s ease; }
.setting-enter-from,
.setting-leave-to { opacity: 0; transform: translate(-50%, -45%); }
</style>