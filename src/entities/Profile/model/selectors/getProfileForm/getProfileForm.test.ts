import { getProfileForm } from './getProfileForm'
import { profileInitialState, profileMockState } from '../../slice/profileState'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('getProfileForm.test', () => {
  test('return initial form', () => {
    const state = { profile: profileInitialState.form }
    expect(getProfileForm(state as StateSchema)).toBe(undefined)
  })

  test('return mock form', () => {
    const state = { profile: profileMockState }
    expect(getProfileForm(state as StateSchema)).toEqual(state.profile.form)
  })
})
