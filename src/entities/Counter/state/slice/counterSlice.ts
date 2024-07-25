import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { type CounterSchema } from 'entities/Counter/state/types/types'

const initialState: CounterSchema = { number: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment (state) {
      state.number++
    },
    decrement (state) {
      state.number--
    },
    incrementByAmount (state, action: PayloadAction<number>) {
      state.number += action.payload
    }
  }
})

export const { actions: counterActions } = counterSlice
export const { reducer: counterReducer } = counterSlice
