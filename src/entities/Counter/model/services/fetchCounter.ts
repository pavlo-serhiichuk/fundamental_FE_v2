import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { ValidationError } from 'entities/Profile'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchCounter = createAsyncThunk<number, void, ThunkConfig<ValidationError[]>>(
  'counter/fetchCounter',
  async (payload, thunkApi) => {
    const { extra } = thunkApi
    try {
      const response = await extra.api.get('/counter')

      return response.data.number
    } catch (e) {
      return thunkApi.rejectWithValue([ValidationError.SERVER_ERROR])
    }
  })
