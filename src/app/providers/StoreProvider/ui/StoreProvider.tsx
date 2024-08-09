import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { type StateSchema } from '../config/types'
import { createReduxStore } from '../config/store'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const {
    initialState,
    asyncReducers
  } = props
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  )
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}
