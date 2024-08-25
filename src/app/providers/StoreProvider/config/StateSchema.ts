import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User/model/types/auth'
import { type SignInSchema } from 'features/SignIn'
import {
  type AnyAction,
  type CombinedState,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject
} from '@reduxjs/toolkit'
import { type ProfileSchema } from 'entities/Profile/model/types/ProfileSchema'
import { type AxiosInstance } from 'axios'
import { type To } from '@remix-run/router'
import { type NavigateOptions } from 'react-router/dist/lib/context'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // async
  signIn?: SignInSchema
  profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithReducerManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
