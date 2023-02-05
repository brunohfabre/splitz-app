import { api } from '@lib/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { createUseBillsKey } from './keys'
import { BillType } from './types'

export function useBills(options?: UseQueryOptions<BillType[]>) {
  return useQuery(
    createUseBillsKey(),
    async () => {
      const response = await api.get('/bills')

      return response.data.bills.map((bill) => ({
        id: bill.id,
        name: bill.name,
        totalValue: bill.total_value,
      }))
    },
    options,
  )
}
