import { BaseEntity } from '@/types'

export type DiscountEntity = {
  courceId: string
  name: string
  fee: number
} & BaseEntity
