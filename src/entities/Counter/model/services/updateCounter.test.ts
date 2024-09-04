import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThynk/TestAsyncThunk'
import { updateCounter } from 'entities/Counter/model/services/updateCounter'
import { ValidationError } from 'entities/Profile'

describe('updateCounter.test', () => {
  test('success', async () => {
    const responseData = { number: 6 }
    const thunk = new TestAsyncThunk(updateCounter)
    thunk.api.put.mockReturnValue(Promise.resolve({ data: responseData }))
    const result: any = await thunk.callThunk(6)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })
  test('error', async () => {
    const thunk = new TestAsyncThunk(updateCounter)
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result: any = await thunk.callThunk(6)
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidationError.SERVER_ERROR])
  })
})
