import { type StateSchema } from 'app/providers/StoreProvider'
import { getSignInInitialState } from 'features/SignIn/state/slice/getSignInInitialState'
import { getSignInData } from 'features/SignIn/state/selectors/getSignInData/getSignInData'

describe('getSignInData', () => {
  test('return value', () => {
    const initialState = getSignInInitialState(true)

    const state: DeepPartial<StateSchema> = { signIn: initialState }
    console.log(1, initialState)
    expect(getSignInData(state as StateSchema)).toBe(initialState)
  })
})
