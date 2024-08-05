import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { userActions } from 'entities/User'
import { AUTH_USER_DATA } from 'shared/const/localStorage'

export const fetchSignIn = createAsyncThunk(
  'users/fetchByIdStatus',
  async (payload: any, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', payload)
      localStorage.setItem(AUTH_USER_DATA, JSON.stringify(response.data))
      thunkAPI.dispatch(userActions.setUserAuthData(response.data))
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('User is not found. Try latter')
    }
  }
)
