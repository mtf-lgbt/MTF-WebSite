<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import "@m3e/web/nav-bar";
import "@m3e/web/icon";
import "@m3e/web/dialog";



const topheadrer = ref(true); 
const scrollDirection = ref('up'); // 用来记录方向：'down'（下滑） 或 'up'（上滑）
let lastScrollY = 0;
let ticking = false;

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;
            
            // 1. 判断滚动方向（加一个阈值判断，避免微小抖动）
            if (currentScrollY > lastScrollY) {
                scrollDirection.value = 'down'; // 往下滚
            } else if (currentScrollY < lastScrollY - 5) {
                scrollDirection.value = 'up';   // 往上滚
            }

            // 2. 判断是否在顶部
            topheadrer.value = currentScrollY === 0;
            
            // 更新上一次的滚动位置
            lastScrollY = currentScrollY;
            ticking = false;
        });
        ticking = true;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
    <div class="header">
        <m3e-nav-bar mode="auto">
            
            <transition
                :name="scrollDirection === 'down' ? 'slide-up' : 'slide-down'"
                mode="out-in"
            >
                <m3e-nav-item 
                    v-if="topheadrer == true" 
                    href="/"
                >
                    <m3e-icon slot="icon" name="home"></m3e-icon>
                    {{ $t('components.header.home') }}
                </m3e-nav-item>
                <m3e-nav-item 
                    v-else
                    @click.prevent="scrollToTop"
                >
                    <m3e-icon slot="icon" name="arrow_upward"></m3e-icon>
                    {{ $t('components.header.backToTop') }}
                </m3e-nav-item>
            </transition>
            <m3e-nav-item href="/friends">
                <m3e-icon slot="icon" name="group"></m3e-icon>
                {{ $t('components.header.friends') }}
            </m3e-nav-item>
            <m3e-nav-item href="/about">
                <m3e-icon slot="icon" name="info"></m3e-icon>
                {{ $t('components.header.about') }}
            </m3e-nav-item>
            <m3e-nav-item href="/blog">
                <m3e-icon slot="icon" name="article"></m3e-icon>
                {{ $t('components.header.blogs') }}
            </m3e-nav-item>
            <m3e-nav-item variant="filled">
                <m3e-icon slot="icon" name="settings"></m3e-icon>
                <m3e-dialog-trigger for="settingPage">
                    {{ $t('components.header.setting') }}
                </m3e-dialog-trigger>
            </m3e-nav-item>
        </m3e-nav-bar>
    </div>
</template>
<style scoped>
.header{
    z-index: 100;
    top: 0;
    position: sticky;
    transition: all 0.5s ease;
}

m3e-nav-item {
  min-width: 0; /* 允许 flex 子项收缩 */
}





/* 页面下滑时：元素向上滑出/滑入 */
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.15s ease;
}
.slide-up-enter-from {
    opacity: 0;
    transform: translateY(50%); /* 从下方进来 */
}
.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-50%); /* 向上方出去 */
}

/* 页面上滑时：元素向下滑出/滑入 */
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.15s ease;
}
.slide-down-enter-from {
    opacity: 0;
    transform: translateY(-50%); /* 从上方进来 */
}
.slide-down-leave-to {
    opacity: 0;
    transform: translateY(50%); /* 向下方出去 */
}
</style>