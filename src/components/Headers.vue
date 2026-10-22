<script setup>
import { useDeviceType } from '../utils/isMobie';
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const { isMobile, isTablet } = useDeviceType();

//有機會給他嗎的改掉
const openList = () => {
    const menu = document.getElementById('mobileMenu');
    if (!menu) return;
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    menu.style.animation = 'fadeIn 0.3s';
};

const topheadrer = ref(true);

const handleScroll = () => {
    const header = document.querySelector('.header');
    if (!header) return;

    if (window.scrollY === 0) {
        //header.style.backgroundColor = 'var(--card-bg)';
        header.classList.remove('div');
        topheadrer.value = true;
    } else {
        //header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        header.classList.add('div');
        topheadrer.value = false;
    }
};

const openSettingMenu = () => {
    // 抛出一个全局事件
    window.dispatchEvent(new CustomEvent('toggle-setting-menu'));
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
    <div class="header">
        <a href="/" class="icon" fadeUp="true">
            <img :src="$HeadImageX64px"/>
            <span v-if="!isMobile"><b>MTF.LGBT | for EVERY TRANSGENDER PEOPLE</b></span>
            <span v-else><b>MTF.LGBT</b></span>
        </a>
        <page v-if="!isMobile" fadeUp="true">
            <transition name="fade" mode="out-in">
                <a v-if="topheadrer == true" href="/">{{ $t('components.header.home') }}</a>
                <a v-else href="#" @click.prevent="scrollToTop" button="1">{{ $t('components.header.backToTop') }}</a>
            </transition>
            <a href="/friends">{{ $t('components.header.friends') }}</a>
            <a href="/about">{{ $t('components.header.about') }}</a>
            <a href="/blog">{{ $t('components.header.blogs') }}</a>
            <a @click="openSettingMenu">{{ $t('components.header.setting') }}</a>
        </page>
        <div class="rtmod" v-else fadeUp="true">
            <button @click="openList" id="openListBtn" button="2">...</button>
        </div>
    </div>
    <div class="div mobile-menu" id="mobileMenu" v-if="!isTablet">
        <a href="/">{{ $t('components.header.home') }}</a>
        <a href="/friends">{{ $t('components.header.friends') }}</a>
        <a href="/about">{{ $t('components.header.about') }}</a>
        <a href="/blog">{{ $t('components.header.blogs') }}</a>
        <a @click="openSettingMenu">{{ $t('components.header.setting') }}</a>
    </div>
</template>
<style scoped>
.header{
    padding: 1em 2em;
    font-size: 18px;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 1em;
    transition: all 0.5s ease;
}
.header > * {
    margin: 0 1em;
}
.header img {
    height: 1.5em;
    width: auto;
    margin-right: 0.5em;
    vertical-align: middle;
    border-radius: 50%;
}
.header .icon {
    /*margin-right: auto;*/
    text-decoration: none;
}
.header .rtmod{
    margin-left: auto;
}
/*
.header > :not(.icon,.rtmod){
    position:absolute
}
    */
.header page a{
    margin: 0 20px;
}
.mobile-menu {
    display: none;
    flex-direction: column;
}


.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>