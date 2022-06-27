import { BaseEntity } from '@/types'

export type UserEntity = {
  firstName: string
  lastName: string
  email: string
  role: 'ADMIN' | 'USER'
  bio: string
} & BaseEntity
