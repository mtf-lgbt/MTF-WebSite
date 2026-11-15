// src/utils/getAfadianAllSumAmount.js
import { computed } from 'vue'
import { useAfadianData } from '@/utils/getAfadianData'

export function useAfadianAllSumAmount() {
  const { data, error, loading } = useAfadianData('sponsor')

  const totalSumAmount = computed(() => {
    const list = data.value?.data?.list ?? []
    return list.reduce((sum, item) => {
      const n = Number(item?.all_sum_amount ?? 0)
      return sum + (Number.isFinite(n) ? n : 0)
    }, 0)
  })

  return { totalSumAmount, error, loading }
}