import { type ThunkConfig } from 'app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Profile, ValidationError } from '../../types/ProfileSchema'
import { getProfileForm } from 'entities/Profile'
import { validateProfileForm } from 'entities/Profile/model/services/validateProfileForm/validateProfileForm'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string | ValidationError[]>>(
  'profile/updateProfileData',
  async (payload, thunkAPI) => {
    const { extra, getState } = thunkAPI
    const form = getProfileForm(getState())
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const validationErrors = validateProfileForm(form!)

    if (validationErrors.length) {
      return thunkAPI.rejectWithValue(validationErrors)
    }
    try {
      const response = await extra.api.put<Profile>('/profile', form)

      if (!response.data) {
        throw new Error('error')
      }

      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue([ValidationError.SERVER_ERROR])
    }
  }
)
