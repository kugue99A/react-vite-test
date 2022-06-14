import { BaseEntity } from '@/types'

export type UserEntity = {
  firstName: string
  lastName: string
  kanafirstName: string
  kanaLastName: string
  gender: string
  attribute: string
  birthday: string
} & BaseEntity
