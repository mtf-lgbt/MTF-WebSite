<script setup>
import { useAfadianData } from '@/utils/getAfadianData'
import { computed } from 'vue'
const { data, error, loading } = useAfadianData('sponsor')

const sortedList = computed(() => {
    const list = data.value?.data?.list ?? []
    return [...list].sort((a, b) => b.all_sum_amount - a.all_sum_amount) // 按金额倒序（高的在前）
})
</script>

<template>
    <div class="links-grid">
        <p v-if="loading">加载中…</p>
        <p v-else-if="error">加载失败：{{ error.message }}</p>
        <div v-else>
            <!--<div>{{ data?.data?.list?.length || 0 }} 个订单</div>-->
            <m3e-card actionable
                v-for="o in sortedList" 
                :key="o.out_trade_no" 
                :href="`https://afdian.com/u/${o.user.user_id}`"
                target="_blank"
            >
                <img 
                    :src="o.user.avatar" 
                    class="friend-avatar"
                    slot="header"
                    alt="avatar"
                    @error="(e) => e.target.src = 'https://avatars.githubusercontent.com/u/342978400?s=400&v=4'"
                >
                <h3 slot="content">
                    {{ o.user.name }}
                </h3>
                <!--至于为什么，还是看社群意见吧
                <p slot="content">
                    {{ o.all_sum_amount }}
                </p>
                -->
            </m3e-card>
        </div>
    </div>
</template>
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