import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type UserSchema } from 'entities/User/model/types/user'
import { AUTH_USER_DATA } from 'shared/const/localStorage'

const initialState: UserSchema = { _isInit: false }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuthData: (state: UserSchema, action: PayloadAction<any>) => {
      state.auth = action.payload
      if (!action.payload) {
        state._isInit = false
      }
    },
    initUserAuthData: (state: UserSchema) => {
      const local = localStorage.getItem(AUTH_USER_DATA)
      if (local) {
        state.auth = JSON.parse(local)
      }
      state._isInit = true
    }
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
