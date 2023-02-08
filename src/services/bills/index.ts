import { api } from '@lib/api'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { createUseBillsKey } from './keys'
import { BillType } from './types'

export function useBills(options?: UseQueryOptions<BillType[]>) {
  return useQuery(
    createUseBillsKey(),
    async () => {
      const response = await api.get('/bills')

      return response.data.bills.map((bill) => {
        const { id, name, total_value, type, created_at, billUsers } = bill

        return {
          id,
          name,
          totalValue: total_value,
          type,
          createdAt: created_at,
          billUsers,
          isSplit: !!billUsers.length,
        }
      })
    },
    options,
  )
}
