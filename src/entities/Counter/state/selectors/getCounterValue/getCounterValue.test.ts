import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'

describe('getCounterValue.test', () => {
  test('', () => {
    const number: DeepPartial<StateSchema> = 10
    expect(number).toEqual(10)
  })
})
