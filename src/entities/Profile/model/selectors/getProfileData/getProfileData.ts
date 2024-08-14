import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileInitialState } from 'entities/Profile/model/slice/initialState'

export const getProfileData = (state: StateSchema) => {
  if (!state.hasOwnProperty('profile')) {
    return getProfileInitialState().data
  }

  return state.profile?.data
}
