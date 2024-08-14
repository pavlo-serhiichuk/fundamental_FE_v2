import { type StateSchema } from '../../../../../app/providers/StoreProvider'
import { getCounter } from 'entities/Counter/state/selectors/getCounter/getCounter'

describe('getCounter.test', () => {
  test('should return counter object', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { number: 10 }
    }
    expect(getCounter(state as StateSchema)).toEqual({ number: 10 })
  })
})
