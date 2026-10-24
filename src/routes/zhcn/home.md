<script setup>
import { onMounted } from 'vue'
import "@m3e/web/button";
import "@m3e/web/split-button";
import "@m3e/web/callout";


onMounted(() => {
    document.title = 'MTF.LGBT'
})
</script>

<m3e-content-pane fadeUp="true">

## 距离第二年续费还差62.2$
对跨性别者这么重要的一个域名，竟然只需要<b style="font-size: 1.2em;">62.2美元</b>！台下观众一片欢呼：**62.2$！62.2$！**

但是！  
这么点破钱，站长竟然彻夜未眠！

所以各位，如果不想让这个域名落到跨圈神人那里，就求求阁下们给我点钱吧（大哭）
<m3e-button variant="filled" href="/Spons">赞助我！</m3e-button>

## 订阅
点击可以订阅我们的文章，当有新文章时会通知您
<m3e-callout variant="tertiary">
    <m3e-icon slot="icon" name="info"></m3e-icon>
    <span slot="label">注意！</span>
    <span>目前邮箱订阅因部分原因正在维修，暂时无法提供订阅服务。但是订阅申请仍然可以提交，在修复完成后会继续为您提供订阅服务。</span>
    <!-- Context omitted for brevity -->
</m3e-callout>
<m3e-button variant="filled" href="https://forms.gle/v3Q9DCPZLApLHkFn8" button="2">邮箱订阅</m3e-button>

如果你没有Google账号，可以通过以下方式订阅：
<m3e-button-group style="justify-content: left;">
    <m3e-button href="https://forms.cloud.microsoft/r/uDGJST7hLt" variant="tonal">
            <m3e-icon slot="icon" name="mail"></m3e-icon>邮箱订阅
    </m3e-button>
    <m3e-button href="/rss.xml" variant="tonal">
        <m3e-icon slot="icon" name="rss_feed"></m3e-icon>RSS订阅
    </m3e-button>
</m3e-button-group>


## 投稿
你可以在这里投稿你写的文章，也可以在网站副标题中写一句关于你的话。至于你要投稿文章还是别的东西，只需要在相应的问题中填写就可以了。所有内容都会经过站长审核后才能公布。
<a href="https://docs.google.com/forms/d/e/1FAIpQLSeY2gRg201I-07NlbR-Nu6BNKL_zvaR71lJsMqUmcR8ZXOHSA/viewform?usp=header" 
button="2" class="thisButton">投稿</a>


## 服务
<div class="service-grid">
    <m3e-card actionable fadeUp="true">
        <h3 slot="header">NO CONVERSION THERAPY</h3>
        <p slot="content">
            <a href="https://victimsunion.org">官方網站</a> | <a href="/nct">地圖</a>
        </p>
    </m3e-card>
    <m3e-card actionable href="https://mail.mtf.lgbt/login">
        <h3 slot="header">@MTF.LGBT MAIL</h3>
        <p slot="content">MTF.LGBT邮箱，跨性别者自己的邮箱</p>
    </m3e-card>
</div>

</m3e-content-pane>

<style scoped>
.thisButton {
    color:white;
    transform: scale(1);
    transition: all 0.3s ease-in-out;
}
.thisButton:hover {
    color:white;
    padding:3px 40px;
    transform: scale(2);
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}
</style>
