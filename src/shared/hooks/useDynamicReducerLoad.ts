import { useEffect, useState } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { type ReduxStoreWithReducerManager } from 'app/providers/StoreProvider'
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/types'
import { type Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

type EntriesSchema = [StateSchemaKey, Reducer]

const isStorybook = window.location.host === 'localhost:6006'

export const useDynamicReducerLoad = (reducers: ReducersList, isUnmountReducer: boolean = true) => {
  const [isActivate, setIsActivate] = useState(false)
  const store = useStore() as ReduxStoreWithReducerManager
  const dispatch = useDispatch()

  const onActivateDynamicLoad = () => {
    setIsActivate(true)
  }

  useEffect(() => {
    if (isActivate && !isStorybook) {
      Object.entries(reducers).forEach(([name, reducer]: EntriesSchema) => {
        store.reducerManager.add(name, reducer)
        dispatch({ type: `@INIT ${name} reducer` })
      })
      // store.reducerManager.add(key, reducer)
    }
    return () => {
      if (isUnmountReducer && !isStorybook) {
        Object.keys(reducers).forEach((name: StateSchemaKey) => {
          store.reducerManager.remove(name)
          dispatch({ type: `@DESTROY ${name} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, [isActivate])

  return { onActivateDynamicLoad }
}
