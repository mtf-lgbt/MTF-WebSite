// src/utils/getAfadianData.js
import { ref, onMounted } from 'vue'

export function useAfadianData(dataName) {
    const data = ref(null)
    const error = ref(null)
    const loading = ref(true)

    onMounted(async () => {
        try {
            const res = await fetch(`/api/afadian/${dataName}`)
            if (!res.ok) throw new Error(`HTTP ${res.status}`)
            data.value = await res.json()

            if(data.value.ec == 400001) throw new Error(`params incomplete`)
            if(data.value.ec == 400002) throw new Error(`time was expired`)
            if(data.value.ec == 400003) throw new Error(`params was not valid json string`)
            if(data.value.ec == 400004) throw new Error(`no valid token found`)
            if(data.value.ec == 400005) throw new Error(`sign validation failed`)
        } catch (e) {
            error.value = e
            console.error('获取爱发电数据失败:', e)
        } finally {
            loading.value = false
        }
    })

    return { data, error, loading }
}