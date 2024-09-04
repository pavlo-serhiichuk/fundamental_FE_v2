import { counterReducer, counterActions } from './counterSlice'
import { type CounterSchema } from 'entities/Counter'

describe('counterSlice.test', () => {
  test('increment', () => {
    const state: CounterSchema = { number: 10 }
    expect(counterReducer(state, counterActions.increment)).toEqual({ number: 11 })
  })

  test('decrement', () => {
    const state: CounterSchema = { number: 10 }
    expect(counterReducer(state, counterActions.decrement)).toEqual({ number: 9 })
  })
})
