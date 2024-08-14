import { type ThunkConfig } from 'app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Profile } from '../types/ProfileSchema'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/',
  async (payload, thunkAPI) => {
    const { extra } = thunkAPI
    try {
      // ts-ignore
      const response = await extra.api.get('/profile')
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('User is not found. Try latter')
    }
  }
)
