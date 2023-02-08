type BillUser = {
  id: string
  value: number
}

export type BillType = {
  id: string
  name: string
  totalValue: number
  type: 'INCOME' | 'OUTCOME'
  createdAt: string
  billUsers: BillUser[]
  isSplit: boolean
}
