<script setup>
import { useAfadianOrders } from '@/utils/getAfadianData'

const { orders, error, loading } = useAfadianOrders()
</script>

<template>
    <div>
        <p v-if="loading">加载中…</p>
        <p v-else-if="error">加载失败：{{ error.message }}</p>
        <div v-else>
            <div v-for="o in orders?.data?.list ?? []" :key="o.out_trade_no">
                {{ o.user_name }} - {{ o.remark || '（无备注）' }}
            </div>
            <div>{{ orders?.list?.length || 0 }} 个订单</div>
            
        </div>
    </div>
</template>