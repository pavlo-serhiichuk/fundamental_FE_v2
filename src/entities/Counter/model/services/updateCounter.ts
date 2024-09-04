import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { ValidationError } from 'entities/Profile'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateCounter = createAsyncThunk<number, number, ThunkConfig<ValidationError[]>>(
  'counter/updateCounter',
  async (payload, thunkApi) => {
    try {
      const response = await thunkApi.extra.api.put('/counter', { number: payload })

      return response.data.number
    } catch (e) {
      return thunkApi.rejectWithValue([ValidationError.SERVER_ERROR])
    }
  })
