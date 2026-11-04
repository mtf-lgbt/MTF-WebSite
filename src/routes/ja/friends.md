<m3e-content-pane>

# 友達リンク

何か必要かあるかわからない。多分、我々トランスジェンダーのことを世の中に忘れられないようにするためかもしれない

## バートナー

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

## 友達

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

## 相互リンクの申請
相互リンクをご希望の場合は、まずあなたのサイトに当サイトへのリンクを追加したうえで、メールをお送りください。

- 名称：あなたのサイト名
- URL：https://yourdomain.com またはあなた自身を表すSNSのプロフィールページ
- 説明：あなたのサイトの簡単な説明またはサブタイトル
- アバター：公開ネットワークからアクセス可能な画像リンク
- 色：色の英語名、または16進数のカラーコード。例：<span style="color: white; background-color: #3388bb;">#3388bb</span>

当サイトをあなたの相互リンクに追加したい場合
以下の内容をあなたのウェブページに追加してください：

- 名称：WEBSITE of EVERY TRANSGENDER PEOPLE.
- 略称：MTF.LGBT（上記のような長すぎる名前を表示できない場合は、こちらをお使いください）
- URL：https://mtf.lgbt
- 説明：A gift for all Transgender community.
- アバター：https://avatars.githubusercontent.com/u/177436503?v=4

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