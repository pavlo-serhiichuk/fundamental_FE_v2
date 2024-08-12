import type { Countries, Currency } from 'shared/const/common'

export interface Profile {
  name?: string
  lastname?: string
  age?: number
  city?: string
  country?: Countries
  currency?: Currency
  username?: string
  avatar?: string
}
export interface ProfileSchema {
  data?: Profile
  isLoading?: boolean
  error?: undefined | string
  readonly?: boolean
}
