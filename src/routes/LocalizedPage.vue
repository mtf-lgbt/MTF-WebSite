<script setup>
import { shallowRef, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({ page: { type: String, required: true } })
const { locale } = useI18n()
const comp = shallowRef(null)

// 静态 glob，Vite 必须能在构建时看到字面量路径
const modules = import.meta.glob('./*/**/*.md')

const load = async (lang) => {
    const key = `./${lang}/${props.page}.md`
    const fallbackKey = `./zhcn/${props.page}.md`
    const loader = modules[key] ?? modules[fallbackKey]
    if (!loader) {
        console.warn(`[LocalizedPage] 找不到页面: ${key} 或 ${fallbackKey}`)
        comp.value = null
        return
    }
    comp.value = (await loader()).default
}

watch(locale, load, { immediate: true })
</script>

<template>
    <component :is="comp" v-if="comp" />
</template>