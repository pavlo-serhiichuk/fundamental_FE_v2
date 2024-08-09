import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type SignInSchema } from '../types/signInSchema'
import { fetchSignIn } from 'features/SignIn/state/thunks/fetchSignIn'
import { getSignInInitialState } from 'features/SignIn/state/slice/getSignInInitialState'

const initialState: SignInSchema = getSignInInitialState()

const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    setUsername (state: SignInSchema, action: PayloadAction<string>) {
      state.username = action.payload
    },
    setPassword (state: SignInSchema, action: PayloadAction<string>) {
      state.password = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchSignIn.pending, (state: SignInSchema, action: any) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchSignIn.fulfilled, (state: SignInSchema, action: any) => {
        state.isLoading = false
      })
      .addCase(fetchSignIn.rejected, (state: SignInSchema, action: any) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: signInActions } = signInSlice
export const { reducer: signInReducer } = signInSlice
