<template>
    <div @click="handleAnchorClick" :style="layoutStyle">
        <!-- 侧边栏 TOC -->
        <m3e-content-pane class="toc-sidebar" v-if="!isMobile && !isTablet">
                <a href="/blog">{{ t('routes.blogs.viewOtherBlogs') }}</a>
                <m3e-toc for="article-content" max-depth="3">
                    <span>{{ t('routes.blogs.outLine') }}</span>
                </m3e-toc>
        </m3e-content-pane>
        <!--
        <transition name="fade" mode="out-in">
        <aside class="toc-sidebar div toc-mobile" v-if="isMobile" fadeUp="true">
            <button class="toc-mobile-switch" @click="toggleMobileTOC">
                <img src="/public/icon/menu.svg" style="width: 30px; height: 30px;" alt="Switch" />
            </button>
            <div v-if="mobileTOC_open" class="toc-content">
                <m3e-toc for="article-content" max-depth="3">
                    <span slot="overline">{{ t('routes.blogs.outLine') }}</span>
                </m3e-toc>
            </div>
        </aside>
        </transition>
        -->

        <m3e-content-pane fadeUp="true" class="article-pane">
            <h1>{{ post ? post.title : route.params.title }}</h1>
            <div class="blog-meta" v-if="post">
                <span class="meta-item">{{ t('routes.blogs.author') }} {{ post.author }}，</span>
                <span class="meta-item">{{ t('routes.blogs.releaseDate') }} {{ post.CreationDate }}，</span>
                <span class="meta-item">{{ t('routes.blogs.language') }} {{ post.Language }}</span>
            </div>
            <div class="markdown-body" id="article-content" v-html="html"></div>
            <div class="comments-container">
                
            </div>
        </m3e-content-pane>
    </div>
    <m3e-content-pane>
        <Giscus
            repo="HosinoEJ/HosinoNeko-Blog"
            repoId="R_kgDOSKjMXg"
            category="message"
            categoryId="DIC_kwDOSKjMXs4C-AfD"
            mapping="title"
            strict="1"
            reactionsEnabled="1"
            emitMetadata="1"
            inputPosition="top"
            theme="preferred_color_scheme"
            lang="zh-TW"
            loading="lazy"
        />
    </m3e-content-pane>
</template>

<script setup>
import Giscus from '@giscus/vue';
import { ref, onMounted, watch , computed } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'
import anchor from 'markdown-it-anchor';
import { fetchBlogData, getPostByFilename } from '../utils/blogData.js';
import { useDeviceType } from '../utils/isMobie';
import { useI18n } from 'vue-i18n';//国际化
import "@m3e/web/toc";
import "@m3e/web/content-pane";

const { t } = useI18n();
const { isMobile, isTablet } = useDeviceType();

const layoutStyle = computed(() => ({
    display: (isMobile.value || isTablet.value) ? 'block' : 'flex',
}));

const route = useRoute()
const html = ref('')
const md = new MarkdownIt({
    html: true,
    breaks: true
})
.use(anchor, {
    // 這裡的 slugify 確保中文標題能生成正確的 ID
    slugify: (s) => String(s).trim().toLowerCase().replace(/\s+/g, '-')
})

const handleAnchorClick = (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    
    if (href && href.startsWith('#')) {
        e.preventDefault(); 

        const targetId = decodeURIComponent(href.substring(1));
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            const currentFullHash = window.location.hash; 
            
            // 2. 找到路由路徑部分（去掉舊錨點的部分）
            const basePath = currentFullHash.split('#')[1] || ''; // 拿到 "/blog/xxx"
            const routePath = basePath.split('#')[0]; // 確保拿到純路徑部分
            
            const newHash = `#${routePath}#${encodeURIComponent(targetId)}`;
            
            window.history.replaceState(null, '', `${window.location.pathname}${newHash}`);
        }
    }
};

// 定義加載 Markdown 的函數
const loadMarkdown = async () => {
    try {
        const title = route.params.title
        const mdModule = await import(`../../Blog/${title}.md?raw`)
        html.value = md.render(mdModule.default)
    } catch (error) {
        console.error('找不到該文章:', error)
        html.value = '<p>文章不存在或路徑錯誤</p>'
    }
}

const post = ref(null);

onMounted(async () => {
    const data = await fetchBlogData();
    const filename = route.params.title;
    const foundPost = getPostByFilename(data, filename);
    document.title = filename;
    
    if (foundPost) {
        post.value = foundPost;
        await loadMarkdown(); 
    } else {
        console.error("找不到對應的文章數據");
        await loadMarkdown(); 
    }
});

//onMounted(loadMarkdown);

const mobileTOC_open = ref(false);
const toggleMobileTOC = () => {
    mobileTOC_open.value = !mobileTOC_open.value;
};


// 監聽路由變化
watch(() => route.params.title, loadMarkdown)
</script>
<style scoped>
h1{
    margin: 0 auto;
}

.article-pane {
    min-width: 0;      /* 允许 Flex 子项收缩到内容最小宽度以下 */
    flex: 1;           /* 确保它占据剩余空间（可选，视 m3e-content-pane 默认样式而定） */
}

.toc-sidebar {
    position: sticky;
    top: 65px;
    width: 250px;
    flex-shrink: 0;  /* 防止目錄被文章擠扁 */
    max-height: calc(100vh - 180px); /* 限制高度，防止超過視窗 */
    overflow-y: auto;
    padding-left: 20px;
} 

.blog-meta {
    color: var(--color-meta);
    font-size: 0.9em;
    margin-bottom: 2em;
}

.toc-mobile-switch {
    position: sticky;
    top: 5px;
    right: 20px;
    z-index: 101;
    color: white;
    border-radius: var(--border-radius);
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
.toc-mobile {
    position: sticky;
    top: 120px;
    width: 250px;
    max-height: 300px;

    z-index: 100;
    margin: 0 auto;
    transition: all 0.3s ease;
}

:deep(.markdown-body h1),
:deep(.markdown-body h2),
:deep(.markdown-body h3),
:deep(.markdown-body h4),
:deep(.markdown-body h5),
:deep(.markdown-body h6) {
    scroll-margin-top: 100px; /* 根据你的导航栏或粘性侧边栏高度调整 */
}
</style>