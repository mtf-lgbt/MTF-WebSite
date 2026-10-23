# MTF.LGBT

<p>點解我眼角長期都帶住淚？因為我一直被困喺一個暗無天日嘅十月入面</p>

## 这事什么

MTF.LGBT主站源代码，你fork去做自己的个人网站也可以。

## 功能

| 編號 | 功能 | 描述 |
|---|---|---|
|1|友情鏈接|在```/public/friends.json```填入友情鏈接的信息后，就可以在 https://domain.com/#/friends 中查看友鏈信息|
|2|仅文章｜前往```example.com/blogMdOnly/“你要查看的文章”?mdOnly=true```可以仅显示文章内容而不显示网站标题、右边栏等内容。适合在文章中插入<iframe>|

## ANIME?!

打算搞一些动画，但是似乎还是有些问题，目前至少DEMO有了

### DEMO

```vue
<template>
    <div class="container">
        <div class="button-wrapper">
            <button id="chars" class="button">Characters</button>
            <button id="words" class="button">Words</button>
            <button id="lines" class="button">Lines</button>
        </div>

        <div class="textAnime">
            Break apart HTML text into characters, words, and/or lines for easy animation.
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useTextAnime } from '@/utils/textAnime'

const {
    setup,
    animateChars,
    animateWords,
    animateLines,
    destroy
} = useTextAnime('.textAnime')


onMounted(() => {
    setup()
    document
        .querySelector('#chars')
        ?.addEventListener('click', animateChars)
    document
        .querySelector('#words')
        ?.addEventListener('click', animateWords)
    document
        .querySelector('#lines')
        ?.addEventListener('click', animateLines)
    window.addEventListener('resize', setup)
})

onUnmounted(() => {
    document
        .querySelector('#chars')
        ?.removeEventListener('click', animateChars)
    document
        .querySelector('#words')
        ?.removeEventListener('click', animateWords)
    document
        .querySelector('#lines')
        ?.removeEventListener('click', animateLines)
    window.removeEventListener('resize', setup)
    destroy()
})
</script>
```