import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type UserSchema } from 'entities/User/model/types/auth'
import { AUTH_USER_DATA } from 'shared/const/localStorage'

const initialState: UserSchema = {}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuthData: (state: UserSchema, action: PayloadAction<any>) => {
      console.log('action.payload', action.payload)
      state.auth = action.payload
    },
    initUserAuthData: (state: UserSchema) => {
      const local = localStorage.getItem(AUTH_USER_DATA)
      if (local) {
        state.auth = JSON.parse(local)
      }
    }
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
