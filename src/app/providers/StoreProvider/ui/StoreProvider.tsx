import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { type StateSchema } from '../types/types'
import { createReduxStore } from '../config/store'
import { type DeepPartial } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const store = createReduxStore(props.initialState as StateSchema)
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}
