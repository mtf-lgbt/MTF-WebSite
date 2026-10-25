<m3e-content-pane>

# 友情链接

不知道有什么用，可能是免得让人忘记有这些TEANSGENDER的存在吧

## 合作伙伴

<div class="links-grid">
<m3e-card actionable
    v-for="cooperate in cooperateData.friends" 
    :key="cooperate.url" 
    :href="cooperate.url" 
    target="_blank" 
    :style="{ 
        '--m3e-filled-card-container-color': cooperate.color ?
            cooperate.color + '22' : '#3388bb22',
        '--m3e-card-headline-color': cooperate.color || '#3388bb'
    }"
>
<img 
    :src="cooperate.avatar" 
    class="friend-avatar"
    slot="header"
    alt="avatar"
    @error="(e) => e.target.src = 'https://avatars.githubusercontent.com/u/342978400?s=400&v=4'"
>
    
<h3 slot="content">
    {{ cooperate.name }}
</h3>
    
<p slot="content" v-if="cooperate.desc" class="desc">
    {{ cooperate.desc }}
</p>
</m3e-card>
</div>

## 朋友们

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
    
<h3 slot="content">
    {{ friend.name }}
</h3>
    
<p slot="content" v-if="friend.desc" class="desc">
    {{ friend.desc }}
</p>
</m3e-card>
</div>
</m3e-content-pane>

<m3e-content-pane>

## 申请交换友链
如果你也想交換鏈接。請在你的網站添加本站後，请向我发送[邮件]("mailto:contact@mtf.lgbt")

- 名称：你的网站名称
- 网址：https://yourdomain.com 或者代表你自己的社交网站主页
- 描述：你的网站的简短描述或者副标题
- 头像：公网可访问的图片链接
- 颜色：可以是颜色英文名，或者十六进制颜色代码。例：<span style="color: white; background-color: #3388bb;">#3388bb</span>

## 如果你想把本站加入你的友链，请在你的网页添加以下内容：

- 名称：WEBSITE of EVERY TRANSGENDER PEOPLE.
- 简称：MTF.LGBT(如果您的网站无法显示上面那么又臭又长的名字，请使用这个)
- 网址：https://mtf.lgbt
- 描述：A gift for all Transgender community.
- 头像：[https://avatars.githubusercontent.com/u/177436503?v=4](https://avatars.githubusercontent.com/u/177436503?v=4)

<img src="https://avatars.githubusercontent.com/u/177436503?v=4" width="50px" style="border-radius: 50%;"/>

</m3e-content-pane>

<script setup>
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';
import friendsJson from '@/data/friends.json';//友情链接
import cooperateJson from '@/data/cooperate.json';//合作伙伴网站

const { t } = useI18n();

//定義響應式資料，初始結構與你的 JSON 一致
const friendsData = ref(friendsJson);
const cooperateData = ref(cooperateJson);

onMounted(() => {
    loadFriends();
    document.title = '友情链接'
});
</script>
<style scoped>

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