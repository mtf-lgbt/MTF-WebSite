// src/utils/getAfadianData.js
import { ref, onMounted } from 'vue'

export function useAfadianOrders() {
    const orders = ref(null)
    const error = ref(null)
    const loading = ref(true)

    onMounted(async () => {
        try {
            const res = await fetch('/api/afadian/orders')
            if (!res.ok) throw new Error(`HTTP ${res.status}`)
            orders.value = await res.json()

            if(orders.value.ec == 400001) throw new Error(`params incomplete`)
            if(orders.value.ec == 400002) throw new Error(`time was expired`)
            if(orders.value.ec == 400003) throw new Error(`params was not valid json string`)
            if(orders.value.ec == 400004) throw new Error(`no valid token found`)
            if(orders.value.ec == 400005) throw new Error(`sign validation failed`)
        } catch (e) {
            error.value = e
            console.error('获取爱发电订单失败:', e)
        } finally {
            loading.value = false
        }
    })

    return { orders, error, loading }
}