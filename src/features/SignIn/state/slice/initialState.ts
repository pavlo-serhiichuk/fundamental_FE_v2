import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'

export const initialState: DeepPartial<StateSchema> = {
  signIn: {
    username: 'user',
    password: '111',
    error: "Error message"
  }
}
