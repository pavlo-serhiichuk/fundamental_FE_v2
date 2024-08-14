import { type Profile, type ProfileSchema } from 'entities/Profile'

export function getProfileInitialState (isWithValue: boolean = false): ProfileSchema {
  const initialProfileData: Profile = {
    firstname: 'Name',
    lastname: 'Lastname',
    age: 22,
    city: 'City',
    country: 'Ukraine',
    currency: 'UAH',
    username: 'Username',
    avatar: 'string'
  }

  return {
    data: isWithValue ? initialProfileData : undefined,
    isLoading: false,
    error: undefined,
    readonly: true
  }
}
