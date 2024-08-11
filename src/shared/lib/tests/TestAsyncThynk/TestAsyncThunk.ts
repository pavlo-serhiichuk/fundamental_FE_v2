import { type AsyncThunkAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'

type ActionCreatorType<Return, Arg, RejectValue> =
  (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectValue }>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

  constructor (actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callThunk (arg: Arg) {
    const action = this.actionCreator(arg)
    const result = await action(this.dispatch, this.getState, undefined)

    return result
  }
}
