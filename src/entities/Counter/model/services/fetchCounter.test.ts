import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThynk/TestAsyncThunk'
import { fetchCounter } from './fetchCounter'
import { initialState } from 'entities/Counter/model/slice/counterSlice'

describe('fetchCounter.test', () => {
  test('success', async () => {
    const responseData = { number: 6 }
    const thunk = new TestAsyncThunk(fetchCounter, { counter: initialState })
    thunk.api.get.mockReturnValue(Promise.resolve({ data: responseData }))
    const result: any = await thunk.callThunk()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toBe(responseData.number)
  })
  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchCounter, { counter: initialState })
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result: any = await thunk.callThunk()
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
