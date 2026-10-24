# MTF.LGBT

<p>點解我眼角長期都帶住淚？因為我一直被困喺一個暗無天日嘅十月入面</p>

## 这事什么

MTF.LGBT主站源代码，你fork去做自己的个人网站也可以。

## 功能

| 編號 | 功能 | 描述 |
|---|---|---|
|1|友情鏈接 | 在```/public/friends.json```填入友情鏈接的信息后，就可以在 https://domain.com/#/friends 中查看友鏈信息|
|2| 仅文章|前往```example.com/blogMdOnly/“你要查看的文章”?mdOnly=true```可以仅显示文章内容而不显示网站标题、右边栏等内容。适合在文章中插入```<iframe>```|

## 翻译
> 这一段比较重要，我会在README.md中也写明。

首先很感谢您为我们的项目提供翻译，我们的翻译系统结构分为两个部分：词条翻译和内容翻译。

词条翻译和内容翻译的区别：

| 项目 | 词条翻译 | 内容翻译 |
| --- | --- | --- |
| 描述 | 对于标题、按钮文字、链接文本等内容采用原生的i18n国际化模组进行翻译。基本不会进行修改 | 对于长文、活动、通知等不方便放入JSON档案的文字，会采用内容翻译。比如「关于我们」页面。修改频率相较于词条翻译会多一些 |
| 特性 | 翻译内容严格一一对应，不过如果你发现一个文件塞了太多内容，你可以将一部分词条拆出来放在单独的文件里。（站长警告你别拆的太抽象别人看不懂） | 不同语言可以写完全不一样的文字，甚至可以添加区域性的活动通知。有点不像是单纯的翻译了，更像是区域设置。只不过这个「区域设定」会随着翻译设置的变化而变化，而不是平时我们见到的语言是一个设置项目，区域一个设置项目 |
| 位置 | ```./src/i18n``` | ```./src/routes``` |

### 词条翻译

首先我们可以学习一下目前（2026-10-24）的目录结构：
```dash
src/i18n
├── i18n.js
├── ja
│   ├── blogs.js
│   ├── friends.js
│   ├── home.js
│   └── master.js
└── zh-cn
    ├── blogs.js
    ├── friends.js
    ├── home.js
    └── master.js
```
在这之中，```i18n.js```充当一个注册机，基础翻译工作在这里汇总。

#### 注册

首先需要在顶部import一个根文件，作为你语言翻译的起点。一般情况下根文件位置应该创建在```src/i18n/<Language Code>/master.js```。   
随后，你需要在message中加入你刚才import的名字，比如你如果写的是```import enus from './en-us/master.js'```，在message上就要写```enus```。

#### 架构

没有什么好说的，照着其他语言的架构抄就可以。只有一个重点需要注意下：

这是根文件的基础架构
```js
const zhcn = {
    { ··· }
}
export default zhcn;
```
你只需要保证「const」后面的那个单词以及「default」后面的那个单词是一致的，并且和```i18n.js```中相应import的名字一致就可以。

### 内容翻译

这一段比较简单，在```/src/routes/```中创建一个文件夹（如果还没有人翻译），在文件夹内创建你要翻译的页面的名字加```.md```——比如「关于我们」页面需要创建```about.md```。但是有一个特例，就是主页，或者一般程序语境下的「index」。你需要创建```home.md```而不是```index.md```。

另外，你在创建文件夹时文件夹名称应该是```src/i18n/i18n.js```中import语言根文件时的名字。

### 设置按钮和setting.js

在```src/components/setting.vue```的第98行那个列表中加一下就行

## ANIME?!

打算搞一些动画，但是似乎还是有些问题，目前至少DEMO有了：

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