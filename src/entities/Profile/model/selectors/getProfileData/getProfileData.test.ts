import { getProfileData } from './getProfileData'
import { profileInitialState, profileMockState } from '../../slice/profileState'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('getProfileData.test', () => {
  test('return initial data', () => {
    const state = { profile: profileInitialState }
    expect(getProfileData(state as StateSchema)).toBe(undefined)
  })

  test('return mock data', () => {
    const state = { profile: profileMockState }
    expect(getProfileData(state as StateSchema)).toEqual(state.profile.data)
  })
})
