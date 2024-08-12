import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from 'entities/Profile'

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: () => {}
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
