import { profileActions, profileReducer, type ProfileSchema, ValidationError } from 'entities/Profile'
import { profileMockForm } from 'entities/Profile/model/slice/profileState'
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData'

describe('profileSlice.test', () => {
  test('test setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly()
    )).toEqual({ readonly: false })
  })

  test('test update profile form', () => {
    const state: DeepPartial<ProfileSchema> = { form: profileMockForm }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfileForm({ lastname: 'new lastname' })
    )).toEqual({ form: { ...profileMockForm, lastname: 'new lastname' } })
  })

  test('test resetForm', () => {
    const state: DeepPartial<ProfileSchema> = { data: profileMockForm, form: profileMockForm, validationErrors: [ValidationError.FIRSTNAME_ERROR], readonly: false }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.resetForm()
    )).toEqual({ data: profileMockForm, form: profileMockForm, validationErrors: [], readonly: true })
  })

  test('test updateProfileData.pending', () => {
    const state: DeepPartial<ProfileSchema> = { isUpdating: false, validationErrors: [ValidationError.LASTNAME_ERROR] }
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending
    )).toEqual({ isUpdating: true, validationErrors: [] })
  })

  test('test updateProfileData.fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = { isUpdating: true, readonly: false, data: { ...profileMockForm, lastname: 'old lastname' } }
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(profileMockForm, '', undefined, undefined)
    )).toEqual({ isUpdating: false, readonly: true, data: profileMockForm })
  })
})
