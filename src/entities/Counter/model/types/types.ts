import { type ValidationError } from 'entities/Profile'

export interface CounterSchema {
  number: number
  serverNumber?: number
  isLoading?: boolean
  error?: ValidationError[]
}
