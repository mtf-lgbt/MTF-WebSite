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

## 2年目の更新まであと62.2$

トランスジェンダーにとってこれほど重要なドメインが、たったの<b style="font-size: 1.2em;">62.2ドル</b>！会場の観客は大歓声：**62.2$！62.2$！**

しかし！  
こんなはした金なのに、管理人は一晩中眠れなかった！

ですので皆さん、このドメインがトランス界隈の厄介な人たちの手に渡らないようにしたくないなら、どうか皆さま、少しだけお金を恵んでください（大泣き）
<m3e-button variant="filled" href="/Spons">支援する！</m3e-button>

## 購読
クリックすると私たちの記事を購読できます。新しい記事があると通知されます
<m3e-callout variant="tertiary">
    <m3e-icon slot="icon" name="info"></m3e-icon>
    <span slot="label">注意！</span>
    <span>現在、メール購読は一部の事情によりメンテナンス中で、一時的に購読サービスを提供できません。ただし購読申請は引き続き提出できます。修復完了後、購読サービスを再開します。</span>
    <!-- Context omitted for brevity -->
</m3e-callout>
<m3e-button variant="filled" href="https://forms.gle/v3Q9DCPZLApLHkFn8" button="2">メール購読</m3e-button>

Google アカウントがない場合は、以下の方法で購読できます：
<m3e-button-group style="justify-content: left;">
    <m3e-button href="https://forms.cloud.microsoft/r/uDGJST7hLt" variant="tonal">
            <m3e-icon slot="icon" name="mail"></m3e-icon>メール購読
    </m3e-button>
    <m3e-button href="/rss.xml" variant="tonal">
        <m3e-icon slot="icon" name="rss_feed"></m3e-icon>RSS購読
    </m3e-button>
</m3e-button-group>


## 投稿
ここではあなたが書いた記事を投稿できます。また、サイトのサブタイトルにあなたについての一言を書くこともできます。記事でもそれ以外でも、該当する質問欄に記入するだけでOKです。すべての内容は管理人の審査後に公開されます。
<a href="https://docs.google.com/forms/d/e/1FAIpQLSeY2gRg201I-07NlbR-Nu6BNKL_zvaR71lJsMqUmcR8ZXOHSA/viewform?usp=header" 
button="2" class="thisButton">投稿</a>


## サービス
<div class="service-grid">
    <m3e-card actionable fadeUp="true">
        <h3 slot="header">NO CONVERSION THERAPY</h3>
        <p slot="content">
            <a href="https://victimsunion.org">公式サイト</a> | <a href="/nct">地図</a>
        </p>
    </m3e-card>
    <m3e-card actionable href="https://mail.mtf.lgbt/login">
        <h3 slot="header">@MTF.LGBT MAIL</h3>
        <p slot="content">MTF.LGBT メール、トランスジェンダー自身のためのメール</p>
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