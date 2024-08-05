import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from '../types/types'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User/model/slice/userSlice'
import { signInReducer } from 'features/SignIn'

export function createReduxStore (initialState?: StateSchema) {
  const reducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    signIn: signInReducer
  }

  return configureStore<StateSchema>({
    reducer,
    preloadedState: initialState
  })
}
