import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from 'entities/User'
import { AUTH_USER_DATA } from 'shared/const/localStorage'
import { type ThunkConfig } from 'app/providers/StoreProvider'

interface FetchSignInProps {
  username: string
  password: string
}

// createAsyncThunk
// - це actionCreator який повертає в результаті action
// цей action потрапляє в dispatch і в результаті повертає якісь данні
export const fetchSignIn = createAsyncThunk<User, FetchSignInProps, ThunkConfig<string>>(
  'users/fetchByIdStatus',
  async (payload, thunkAPI) => {
    const { extra } = thunkAPI
    try {
      // ts-ignore
      const response = await extra.api.post('/login', payload)
      localStorage.setItem(AUTH_USER_DATA, JSON.stringify(response.data))
      thunkAPI.dispatch(userActions.setUserAuthData(response.data))
      // eslint-disable-next-line
      extra.navigate?.('/about')
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('User is not found. Try latter')
    }
  }
)
