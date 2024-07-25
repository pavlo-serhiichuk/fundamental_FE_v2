import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { type StateSchema } from '../types/types'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
  children: ReactNode
  initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const store = createReduxStore()
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}
