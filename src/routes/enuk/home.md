
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    document.title = 'MTF.LGBT'
})
</script>

<m3e-content-pane>

## only need $62.20 for the second year domain renewal

A domain this important to the transgender community costs just **<b style="font-size: 1.2em;">$62.2</b>**! The audience erupts in cheers: **62.2 dollars! 62.2 dollars!**

But wait!

Despite it being such a tiny amount of money, the site administrator has somehow spent the entire night unable to sleep!

So, everyone, if you don't want this domain to end up in the hands of some absolute lunatic from the trans community, please, I'm begging you, spare me a few bucks! (sobbing)

<m3e-button variant="filled" href="/Spons">Support Me!</m3e-button>

## Subscribe

Subscribe to our articles to receive notifications whenever a new post is published.

<m3e-callout variant="tertiary">
    <m3e-icon slot="icon" name="info"></m3e-icon>
    <span slot="label">Please Note!</span>
    <span>Email subscriptions are currently undergoing maintenance due to unforeseen circumstances and are temporarily unavailable. However, you can still submit a subscription request. Your subscription will be activated once the service has been restored.</span>
    <!-- Context omitted for brevity -->
</m3e-callout>

<m3e-button variant="filled" href="https://forms.gle/v3Q9DCPZLApLHkFn8" button="2">Subscribe via Email</m3e-button>

If you don't have a Google account, you can subscribe using the following alternatives:

<m3e-button-group style="justify-content: left;">
    <m3e-button href="https://forms.cloud.microsoft/r/uDGJST7hLt" variant="tonal">
        <m3e-icon slot="icon" name="mail"></m3e-icon>Email Subscription
    </m3e-button>
    <m3e-button href="/rss.xml" variant="tonal">
        <m3e-icon slot="icon" name="rss_feed"></m3e-icon>RSS Feed
    </m3e-button>
</m3e-button-group>

## Submissions

You can submit articles you've written here, or share a personal message to be featured in the website's subtitle. Whether you'd like to contribute an article or something else entirely, simply fill in the relevant fields in the form. All submissions will be reviewed by the site administrator before publication.

<a href="https://docs.google.com/forms/d/e/1FAIpQLSeY2gRg201I-07NlbR-Nu6BNKL_zvaR71lJsMqUmcR8ZXOHSA/viewform?usp=header"
button="2" class="thisButton">Submit</a>

## Services

<div class="service-grid">
    <m3e-card actionable fadeUp="true">
        <h3 slot="header">NO CONVERSION THERAPY</h3>
        <p slot="content">
            <a href="https://victimsunion.org">Official Website</a> | <a href="/nct">Map</a>
        </p>
    </m3e-card>
    <m3e-card actionable href="https://mail.mtf.lgbt/login">
        <h3 slot="header">@MTF.LGBT MAIL</h3>
        <p slot="content">MTF.LGBT Email Service — an email service of our own for transgender people.</p>
    </m3e-card>
</div>

</m3e-content-pane>

<style scoped>
.thisButton {
    color: white;
    transform: scale(1);
    transition: all 0.3s ease-in-out;
}
.thisButton:hover {
    color: white;
    padding: 3px 40px;
    transform: scale(2);
}

.service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}
</style>
