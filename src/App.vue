<script setup>

//頂部欄和底部欄
import Headers from './components/Headers.vue'
import Foot from './components/Footer.vue'
import statusForRt from './components/statusForRt.vue'
import Banne from './components/Banne.vue';
import setting from './components/setting.vue';

import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useDeviceType } from './utils/isMobie';
import { BgColor, Schemes, CONTRAST } from './utils/setting.js'//设置项目
import "@m3e/web/theme"
const { isMobile, isTablet,isDesktop } = useDeviceType();
const route = useRoute()

const mainStyle = computed(() => ({
    flexDirection: (isMobile.value || isTablet.value) ? 'column' : 'row',
}));
const queryType = computed(() => route.query.mdOnly === 'true');//是否是文章只读模式

</script>

<template>
    <m3e-theme :color="BgColor" :scheme="Schemes" :contrast="CONTRAST">
        <div v-if="!queryType">
            <setting ref="colorSetRef"/>
            <Headers />
            <Banne />
            <main class="content" :style="mainStyle">
                <div class="left"><router-view /></div>
                <statusForRt />
            </main>
            <Foot />
        </div>
        <div v-else>
            <router-view />
        </div>
    </m3e-theme>
</template>

<style scoped>
.content {
    /* 自動撐開，佔滿剩餘空間，將 Footer 推到底部 */
    flex: 1;
    display: flex;
    margin: 0 auto;
    width: 90%;
}
.left{
    flex: 1;
    min-width: 0;
}
</style>