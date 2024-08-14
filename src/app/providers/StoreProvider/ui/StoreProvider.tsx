import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { type StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate
  )
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}
