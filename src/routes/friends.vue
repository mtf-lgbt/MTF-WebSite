<template>
    <m3e-content-pane>
        <h1>{{ t('routes.friends.title') }}</h1>
        <p>{{ t('routes.friends.subtitle') }}</p>
        <div class="links-grid">
            <m3e-card actionable
                v-for="friend in friendsData.friends" 
                :key="friend.url" 
                :href="friend.url" 
                target="_blank" 
                :style="{ 
                    '--m3e-filled-card-container-color': friend.color ?
                     friend.color + '22' : '#3388bb22',
                    '--m3e-card-headline-color': friend.color || '#3388bb'
                }"
            >
                <img 
                    :src="friend.avatar" 
                    
                    class="friend-avatar"
                    slot="header"
                    alt="avatar"
                    @error="(e) => e.target.src = 'https://avatars.githubusercontent.com/u/342978400?s=400&v=4'"
                >
                
                    <h3 slot="content"
                    >
                        {{ friend.name }}
                    </h3>
                
                    <p slot="content" v-if="friend.desc" class="desc">
                        {{ friend.desc }}
                    </p>
            </m3e-card>
        </div>
    </m3e-content-pane>

    <m3e-content-pane>
        <div>
            <h2>{{ t('routes.friends.addYourSite.title') }}</h2>
            <p><strong>{{ t('routes.friends.addYourSite.subtitle') }}<a href="mailto:contact@mtf.lgbt">郵件</a></strong></p>
            <ul>
                    <li><strong>{{ t('routes.friends.addYourSite.name') }}</strong> {{ t('routes.friends.addYourSite.notes.name') }}</li>
                    <li><strong>{{ t('routes.friends.addYourSite.url') }}</strong> {{ t('routes.friends.addYourSite.notes.url') }}</li>
                    <li><strong>{{ t('routes.friends.addYourSite.description') }}</strong> {{ t('routes.friends.addYourSite.notes.description') }}</li>
                    <li><strong>{{ t('routes.friends.addYourSite.icon') }}</strong> {{ t('routes.friends.addYourSite.notes.icon') }}</li>
                    <li>
                        <strong>{{ t('routes.friends.addYourSite.color') }}</strong>{{ t('routes.friends.addYourSite.notes.color') }}<span style="color: white; background-color: #3388bb;">#3388bb</span><br>
                        <img src="https://avatars.githubusercontent.com/u/177436503?v=4" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 15px; border: 2px solid #3388bb;">
                    </li>
            </ul>
        </div>

        <div>
            <p><strong>{{ t('routes.friends.addThisSite.subtitle') }}</strong></p>
            <ul>
                    <li><strong>{{ t('routes.friends.addThisSite.name') }}</strong> {{ t('routes.friends.addThisSite.values.name') }}</li>
                    <li><strong>{{ t('routes.friends.addThisSite.shortName') }}</strong> {{ t('routes.friends.addThisSite.values.shortName') }}</li>
                    <li><strong>{{ t('routes.friends.addThisSite.url') }}</strong> <a href="https://mtf.lgbt">mtf.lgbt</a></li>
                    <li><strong>{{ t('routes.friends.addThisSite.description') }}</strong> A gift for all Transgender community.</li>
                    <li><strong>{{ t('routes.friends.addThisSite.icon') }}</strong> <a href="https://avatars.githubusercontent.com/u/177436503?v=4">https://avatars.githubusercontent.com/u/177436503?v=4</a><br>
                    <img src="https://avatars.githubusercontent.com/u/177436503?v=4" width="50px" style="border-radius: 50%;"/></li>
            </ul>
        </div>
    </m3e-content-pane>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';
import '@m3e/web/theme'

const { t } = useI18n();

// 1. 定義響應式資料，初始結構與你的 JSON 一致
const friendsData = ref({ friends: [] });

// 2. 獲取資料
const loadFriends = async () => {
    try {
        const response = await fetch('/friends.json');
        friendsData.value = await response.json();
    } catch (err) {
        console.error("無法讀取友鏈資料：", err);
    }
};

onMounted(() => {
    loadFriends();
    document.title = '星野的朋友們'
});
</script>
<style scoped>

.header {
    text-align: center;
    margin-bottom: 40px;
}

/* 網格系統 */
.links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
}


.desc {
    margin: 4px 0 0;
    font-size: 0.85rem;
    color: #6b7280;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 最多顯示兩行描述 */
    line-clamp: 2; /* 最多顯示兩行描述 */
    overflow: hidden;
}

</style>