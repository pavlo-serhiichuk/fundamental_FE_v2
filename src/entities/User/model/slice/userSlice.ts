import { createSlice } from '@reduxjs/toolkit'
import { type UserSchema } from 'entities/User/model/types/user'

const initialState: UserSchema = {}

// eslint-disable-next-line @typescript-eslint/ban-types
const userSlice = createSlice<UserSchema, {}, "user">({
  name: 'user',
  initialState,
  reducers: {}
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
