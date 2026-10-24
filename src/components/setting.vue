<template>
    <transition name="setting">
        <m3e-dialog dismissible id="settingPage">
                <span slot="header">{{ $t('components.setting.title') }}</span>

                <!--语言设置-->
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

                <!--颜色设置-->
                <div class="settingGroup">
                    <label>
                        <m3e-icon slot="icon" name="palette"></m3e-icon>
                        {{ $t('components.setting.color') }}
                    </label>
                    <input type="color" class="native-color-input" v-model="BgColor">
                </div>
                <div class="settingGroup">
                    <label>
                        <m3e-icon slot="icon" name="colorize"></m3e-icon>
                        {{ $t('components.setting.schemes') }}
                    </label>
                    <m3e-segmented-button>
                        <m3e-button-segment
                            v-for="s in schemes"
                            :key="s.code"
                            @click="switchScheme(s.code)"
                            :checked="Schemes === s.code"
                        >
                        {{ s.label }}
                        </m3e-button-segment>
                        <!-- Additional segments omitted for brevity -->
                    </m3e-segmented-button>
                </div>
                <div class="settingGroup">
                    <label>
                        <m3e-icon slot="icon" name="contrast"></m3e-icon>
                        {{ $t('components.setting.contrast') }}
                    </label>
                    <m3e-segmented-button>
                        <m3e-button-segment
                            v-for="s in contrast"
                            :key="s.code"
                            @click="switchContrast(s.code)"
                            :checked="CONTRAST === s.code"
                        >
                        {{ s.label }}
                        </m3e-button-segment>
                        <!-- Additional segments omitted for brevity -->
                    </m3e-segmented-button>
                </div>
                <div class="settingGroup">
                    <label>
                        <m3e-icon name="height"></m3e-icon>
                        {{ $t('components.setting.bannerHeight') }}
                    </label>
                    <m3e-segmented-button>
                        <m3e-button-segment
                            v-for="s in bannerHeight"
                            :key="s.code"
                            @click="switchBannerHeight(s.code)"
                            :checked="BANNER_HEIGHT === s.code"
                        >
                        {{ s.label }}
                        </m3e-button-segment>
                        <!-- Additional segments omitted for brevity -->
                    </m3e-segmented-button>
                </div>
        </m3e-dialog>
    </transition>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { BgColor, Schemes,LANG, CONTRAST,BANNER_HEIGHT } from '@/utils/setting'
import Cookies from 'js-cookie'
import "@m3e/web/segmented-button";
import "@m3e/web/dialog";

const { locale } = useI18n()

locale.value = LANG.value

const langs = [
    { code: 'zhcn', label: '简体中文' },
    //{ code: 'enus', label: 'English' },
    { code: 'ja',   label: '日本語' }
]
const schemes = [
    { code: 'light', label: 'light' },
    { code: 'auto',  label: 'auto' },
    { code: 'dark',  label: 'dark' },
]
const contrast = [
    {code: 'standard', label: 'Default'},
    {code: 'medium', label: 'Medium'},
    {code: 'high', label: 'High'},
]
const bannerHeight = [
    {code: 'calc(100vh - 66px)', label: 'FULL'},
    {code: 'calc(50vh - 66px)', label: 'HALF'},
]
const switchLang = (code) => {
    locale.value = code // 切换语言
    LANG.value = code     // 触发 watch 写 cookie
}
const switchScheme = (code) => {
    Schemes.value = code
}
const switchContrast = (code) => {
    CONTRAST.value = code
}
const switchBannerHeight = (code) => {
    BANNER_HEIGHT.value = code
}
</script>

<style scoped>
.settingGroup{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    margin:10px auto;
}
.settingGroup label{
    flex: 0 0 auto;
    min-width: 100px;
    white-space: nowrap;
}



.native-color-input {
    appearance: none;
    -webkit-appearance: none;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /* 圆形调色板 — 更现代 */
    cursor: pointer;
    background: #ffffff;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    padding: 0;
    border: 4px solid #ffffff;
}
.native-color-input:hover {
    transform: scale(1.02);
    box-shadow: 0 18px 32px -8px rgba(0, 0, 0, 0.3), 0 0 0 2px #ffffff inset, 0 0 0 4px #eef2f6;
}

.native-color-input:active {
    transform: scale(0.98);
}

/* 针对 WebKit 移除内部默认样式 */
.native-color-input::-webkit-color-swatch-wrapper {
    padding: 0;
}

.native-color-input::-webkit-color-swatch {
    border: none;
    border-radius: 50%;
}

/* 针对 Firefox 的微调 */
.native-color-input::-moz-color-swatch {
    border: none;
    border-radius: 50%;
}
</style>