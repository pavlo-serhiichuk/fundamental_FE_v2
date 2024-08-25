import { getProfileError } from './getProfileError'
import { profileInitialState } from '../../slice/profileState'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('getProfileError.test', () => {
  test('return initial data', () => {
    const state = { profile: { ...profileInitialState, error: '123' } }
    expect(getProfileError(state as StateSchema)).toBe('123')
  })
})
