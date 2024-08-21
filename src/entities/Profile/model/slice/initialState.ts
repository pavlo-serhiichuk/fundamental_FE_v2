import { type Profile, type ProfileSchema, ValidationError } from 'entities/Profile'

export function getProfileInitialState (isWithValue: boolean = false): ProfileSchema {
  const initialProfileData: Profile = {
    name: 'Name',
    lastname: 'Lastname',
    age: 22,
    city: 'City',
    country: 'Ukraine',
    currency: 'UAH',
    username: 'Username',
    avatar: 'https://cdn.sortiraparis.com/images/80/98390/1014564-avatar-le-dernier-maitre-de-l-air-la-serie-netflix-en-live-action-devoile-sa-bande-annonce-finale.jpg'
  }

  return {
    form: isWithValue ? initialProfileData : undefined,
    data: isWithValue ? initialProfileData : undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
    isUpdating: false,
    updateError: undefined,
    validationErrors: []
  }
}
