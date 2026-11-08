<template>
    <m3e-callout variant="primary">
        <p>{{ t('routes.blogs.urlWarning') }}</p>
    </m3e-callout>
    <div @click="handleAnchorClick" :style="layoutStyle" fadeUp="true">
        <!-- 侧边栏 TOC -->
        <m3e-content-pane class="toc-sidebar" v-if="!isMobile && !isTablet" :key="html">
                <a href="/blog">{{ t('routes.blogs.viewOtherBlogs') }}</a>
                <m3e-toc for="article-content" max-depth="3">
                    <span>{{ t('routes.blogs.outLine') }}</span>
                </m3e-toc>
        </m3e-content-pane>

        <m3e-content-pane class="article-pane" fadeUp="true">
            <h1 v-if="!post?.postFetch">{{ post ? post.title : route.params.title }}</h1>
            <div class="blog-meta" v-if="post">
                <span class="meta-item">{{ t('routes.blogs.author') }} {{ post.author }}，</span>
                <span class="meta-item">{{ t('routes.blogs.releaseDate') }} {{ post.CreationDate }}，</span>
                <span class="meta-item">{{ t('routes.blogs.language') }} {{ post.Language }}</span>
            </div>
            <div class="markdown-body" id="article-content" v-if="html" v-html="html"></div>
            <div class="article-loading" v-else>LOADING……</div>
        </m3e-content-pane>
    </div>
    <m3e-content-pane>
        <Giscus
            repo="mtf-lgbt/MTF-WebSite"
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
import { useRoute, useRouter } from 'vue-router'
import MarkdownIt from 'markdown-it'
import anchor from 'markdown-it-anchor';
import { fetchBlogData, getPostByFilename } from '../utils/blogData.js';
import { useDeviceType } from '../utils/isMobie';
import { useI18n } from 'vue-i18n';//国际化

const { t } = useI18n();
const { isMobile, isTablet } = useDeviceType();

const layoutStyle = computed(() => ({
    display: (isMobile.value || isTablet.value) ? 'block' : 'flex',
}));

const route = useRoute()
const router = useRouter()
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
    if (!href || !href.startsWith('#')) return;

    e.preventDefault();

    const targetId = decodeURIComponent(href.substring(1));
    const newHash = `#${encodeURIComponent(targetId)}`;

    if (route.hash === newHash) {
        document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        return;
    }

    router.replace({ hash: `#${targetId}` });
};

// 定義加載 Markdown 的函數
const loadMarkdown = async () => {
    const filename = route.params.title  // 实为 filename

    if (postFetch.value) {
        const remoteUrl = post.value?.url
        if (!remoteUrl) {
            console.error('postFetch 为 true 但缺少 url 字段')
            html.value = '<p>文章不存在或者 url 字段缺失</p>'
            return
        }
        try {
            const res = await fetch(remoteUrl, {
                credentials: 'omit',
                headers: { Accept: 'text/plain, text/markdown, */*' },
            })
            if (!res.ok) throw new Error(`HTTP ${res.status} for ${remoteUrl}`)
            html.value = md.render(await res.text())
        } catch (error) {
            console.error('找不到該文章:', error)
            html.value = '<p>文章不存在或路徑錯誤</p>'
        }
        return
    }

    // 默认：本地 import，filename 不带后缀
    try {
        const mdModule = await import(`../../Blog/${filename}.md?raw`)
        html.value = md.render(mdModule.default)
    } catch (error) {
        console.error('找不到該文章:', error)
        html.value = '<p>文章不存在或路徑錯誤</p>'
    }
}

const post = ref(null);
const postFetch = ref(false);

const loadPost = async () => {
    const filename = route.params.title;   // 实为 filename
    document.title = filename;

    try {
        const data = await fetchBlogData();
        post.value = getPostByFilename(data, filename) || null;
        if (post.value?.title) document.title = post.value.title;
    } catch (e) {
        console.warn('加载文章元数据失败', e);
        post.value = null;
    }

    postFetch.value = !!post.value?.postFetch;
    await loadMarkdown();
};

onMounted(loadPost);
watch(() => route.params.title, loadPost);
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