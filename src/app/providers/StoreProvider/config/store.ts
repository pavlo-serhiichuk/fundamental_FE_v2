import { configureStore, type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from './types'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User/model/slice/userSlice'
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager'

export function createReduxStore (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  }

  const reducerManager = createReducerManager(rootReducers)
  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    preloadedState: initialState
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  store.reducerManager = reducerManager
  return store
}
