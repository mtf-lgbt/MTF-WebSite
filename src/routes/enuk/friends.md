<m3e-content-pane>

# Friends

I don't know what purpose it serves—perhaps it's simply so that people won't forget that we transgender individuals exist.

## Partners

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

## Friends

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


## Partnership Applications

If you would like to exchange links, please add our website to your own site first, then send me an [email](mailto:contact@mtf.lgbt) with the following information:

- Name: The name of your website.
- URL: [https://yourdomain.com](https://yourdomain.com), or the homepage of a social media account representing you.
- Description: A brief description or subtitle for your website.
- Avatar: A publicly accessible image URL.
- Colour: An English colour name or a hexadecimal colour code. For example: <span style="color: white; background-color: #3388bb;">#3388bb</span>

## Adding This Website to Your Link Exchange

If you would like to add our website to your list of partners, please use the following information:

- Name: WEBSITE of EVERY TRANSGENDER PEOPLE.
- Short Name: MTF.LGBT (If your website cannot display the rather lengthy name above, please use this instead.)
- URL: [https://mtf.lgbt](https://mtf.lgbt)
- Description: A gift for all Transgender community.
- Avatar: [https://avatars.githubusercontent.com/u/177436503?v=4](https://avatars.githubusercontent.com/u/177436503?v=4)

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