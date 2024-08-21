import { validateProfileForm } from './validateProfileForm'
import { getProfileInitialState } from 'entities/Profile/model/slice/initialState'
import { type Profile } from 'entities/Profile'
describe('validateProfileForm.test', () => {
  test('with valid data', () => {
    const form: Profile = getProfileInitialState(true).form
    expect(validateProfileForm(form)).toEqual([])
  })
  test('with empty fields', () => {
    const form: Profile = getProfileInitialState().form
    expect(validateProfileForm(form)).not.toEqual([])
  })
})
