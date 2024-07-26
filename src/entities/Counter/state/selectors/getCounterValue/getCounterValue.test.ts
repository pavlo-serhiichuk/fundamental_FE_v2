import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getCounterValue } from './getCounterValue'
type StateSchemaType = StateSchema | any

describe('getCounterValue.test', () => {
  test('', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { number: 10 }
    }
    expect(getCounterValue(state as StateSchemaType)).toEqual(10)
  })
})
