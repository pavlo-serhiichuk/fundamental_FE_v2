import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileInitialState } from 'entities/Profile/model/slice/initialState'

export const getProfileForm = (state: StateSchema) => {
  if (!state.hasOwnProperty('profile')) {
    return getProfileInitialState().form
  }

  return state.profile?.form
}
