import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Profile, type ProfileSchema } from 'entities/Profile'
import { fetchProfileData } from '../thunk/fetchProfileData'
import { getProfileInitialState } from 'entities/Profile/model/slice/initialState'

const initialState: ProfileSchema = getProfileInitialState()

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: () => {}
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProfileData.pending, (state: ProfileSchema, action: any) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchProfileData.fulfilled, (state: ProfileSchema, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchProfileData.rejected, (state: ProfileSchema, action: any) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
