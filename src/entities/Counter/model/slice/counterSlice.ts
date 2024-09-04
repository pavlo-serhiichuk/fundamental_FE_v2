import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type CounterSchema } from 'entities/Counter/model/types/types'
import { updateCounter } from 'entities/Counter/model/services/updateCounter'
import { fetchCounter } from 'entities/Counter/model/services/fetchCounter'

export const initialState: CounterSchema = { number: 0, serverNumber: 0, isLoading: false, error: undefined }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment (state) {
      state.number++
    },
    decrement (state) {
      state.number--
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCounter.pending, (state: CounterSchema) => {
        state.isLoading = true
      })
      .addCase(fetchCounter.fulfilled, (state: CounterSchema, action: PayloadAction<number>) => {
        state.isLoading = false
        state.serverNumber = action.payload
      })
      .addCase(fetchCounter.rejected, (state: CounterSchema, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(updateCounter.pending, (state: CounterSchema) => {
        state.isLoading = true
      })
      .addCase(updateCounter.fulfilled, (state: CounterSchema, action: PayloadAction<number>) => {
        state.isLoading = false
        state.serverNumber = action.payload
      })
      .addCase(updateCounter.rejected, (state: CounterSchema, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: counterActions } = counterSlice
export const { reducer: counterReducer } = counterSlice
