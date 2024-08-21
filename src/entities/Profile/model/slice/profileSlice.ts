import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Profile, type ProfileSchema } from 'entities/Profile'
import { fetchProfileData } from '../services/fetchProfileData'
import { getProfileInitialState } from 'entities/Profile/model/slice/initialState'
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData'

const initialState: ProfileSchema = getProfileInitialState()

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfileForm: (state: ProfileSchema, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload
      }
    },
    setReadonly: (state: ProfileSchema) => {
      state.readonly = !state.readonly
    },
    resetForm: (state: ProfileSchema) => {
      state.readonly = true
      state.form = state.data
    }
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
        state.form = action.payload
      })
      .addCase(fetchProfileData.rejected, (state: ProfileSchema, action: any) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(updateProfileData.pending, (state: ProfileSchema) => {
        state.isUpdating = true
        state.validationErrors = []
      })
      .addCase(updateProfileData.fulfilled, (state: ProfileSchema) => {
        state.isUpdating = false
        state.data = state.form
        state.readonly = true
      })
      .addCase(updateProfileData.rejected, (state: ProfileSchema, action: any) => {
        state.isUpdating = false
        state.validationErrors = action.payload
      })
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
