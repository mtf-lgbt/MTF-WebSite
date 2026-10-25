<template>
  <m3e-content-pane class="blog-container" fadeUp="true">
    <div v-if="!isMobile" style="margin: 50px 0 20px 0;">
        <span class="" style="font-size: 2em; font-weight: bold;">
            {{ t('routes.blogs.menuView.recommend') }}
        </span>
    </div>
    <div v-if="!isMobile" class="recommend-box">
        <router-link v-for="post in recommendList" :key="post.title" :to="`/blog/${post.title}`">
            <m3e-card class="image-card" actionable inline orientation="horizontal">
                    <img
                    width="100px"
                    slot="header"
                    :src="post.illustration
                         || 'https://free.picui.cn/free/19498/2026/09/05/6a9c00a188c9f.jpg'" 
                    alt="Recommendation Image" />
                    <h2 slot="content">{{ post.title }}</h2>
            </m3e-card>
        </router-link>
    </div>
    <m3e-divider v-if="!isMobile"></m3e-divider>
    <div style="margin: 50px 0 50px 0;">
        <span class="" style="font-size: 2em; font-weight: bold;">
            {{ t('routes.blogs.menuView.allblogs') }}
        </span>
    </div>
    
    <m3e-content-pane>
        <m3e-button-group class="tag-filter">
            <m3e-button
                @click="filterByTag(null)" 
                :variant="currentTag == id ? 'filled' : 'elevated'"
            >
                {{ t('routes.blogs.tagAll') }}
            </m3e-button>
            
            <m3e-button
                v-for="(tagName, id) in allTags" 
                :key="id"
                @click="filterByTag(id)"
                :variant="currentTag == id ? 'filled' : 'elevated'"
            >
                {{ tagName }}
            </m3e-button>
        </m3e-button-group>
    </m3e-content-pane>

    <main class="post-list">
        <router-link 
            v-for="post in filteredPosts"
            :key="post.filename"
            :to="`/blog/${post.filename}`"
        >
            <m3e-card variant="filled" actionable class="menu-card">
                <h3 slot="content">{{ post.title }}</h3>
                <div slot="content" class="meta">
                    <span>{{ t('routes.blogs.author') }} {{ post.author }}</span> | 
                    <span>{{ t('routes.blogs.releaseDate') }} {{ post.CreationDate }}</span> |
                    <span>{{ t('routes.blogs.language') }} {{ post.Language }}</span><br>
                </div>
                
                <div slot="content" class="tags">
                    <span v-for="tid in post.tagid" :key="tid" class="tag-badge">
                        #{{ allTags[tid] }}
                    </span>
                </div>
            </m3e-card>
        </router-link>

        <p v-if="filteredPosts.length === 0">{{ t('routes.blogs.NoRelatedAvailable') }}</p>
    </main>
  </m3e-content-pane>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchBlogData, getFilteredPosts } from '../utils/blogData.js';
import recommendList from '@/data/recommend.json';
import { useDeviceType } from '@/utils/isMobie.js'
import { useI18n } from 'vue-i18n';//国际化

const { t } = useI18n();
const { isMobile, isTablet,isDesktop } = useDeviceType();

const route = useRoute();
const router = useRouter();
const blogData = ref({ TagList: {}, Data: [] });

onMounted(async () => {
    blogData.value = await fetchBlogData();
    document.title = '全部文章'
});

// 使用 computed 自動處理篩選，對應原本的 QTag 邏輯
const filteredPosts = computed(() => {
    const qTag = route.query.tag;
    return getFilteredPosts(blogData.value, qTag);
});

const currentTag = computed(() => route.query.tag || null);

const filterByTag = (tagId) => {
    router.push({
        query: tagId ? { tag: tagId } : {}
    });
};

const allTags = computed(() => blogData.value.TagList);
</script>

<style scoped>
.menu-card{
    margin: 10px 0;
}

.post-list {
    display: flex;
    flex-direction: column-reverse;
}

.image-card{
    margin: 20px;
}
</style>