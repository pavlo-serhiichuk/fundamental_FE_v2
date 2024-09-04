import { type FC, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { Button } from 'shared/ui/Button/Button'
import { fetchCounter } from 'entities/Counter/model/services/fetchCounter'
import { counterActions } from 'entities/Counter/model/slice/counterSlice'
import { type StateSchema } from 'app/providers/StoreProvider'
import { updateCounter } from 'entities/Counter/model/services/updateCounter'

export const Counter: FC = () => {
  const dispatch = useDispatch()
  const number = useSelector(getCounterValue)
  const serverNumber = useSelector((state: StateSchema) => state.counter.serverNumber || 0)
  const isLoading = useSelector((state: StateSchema) => state.counter.isLoading)
  const increment = () => dispatch(counterActions.increment())
  const decrement = () => dispatch(counterActions.decrement())
  const incrementServerNumber = useCallback(() => dispatch(updateCounter(serverNumber + 1)), [dispatch, serverNumber])
  const decrementServerNumber = useCallback(() => dispatch(updateCounter(serverNumber - 1)), [dispatch, serverNumber])

  useEffect(() => {
    dispatch(fetchCounter())
  }, [dispatch])

  return (
    <>
      <div>
        <br />
        <br />
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <h1 data-testid="counter-number-local">LOCAL: {number}</h1>
        <br />
        <Button data-testid="counter-btn-decrement" theme={'bordered'} onClick={decrement}>-</Button>
        <Button data-testid="counter-btn-increment" theme={'bordered'} onClick={increment}>+</Button>
      </div>
      <div>
        <br />
        <br />
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <h1 data-testid="counter-number-server">SERVER: {serverNumber}</h1>
        <br />
        <Button disabled={isLoading} data-testid="server-number-btn-dec" theme={'bordered'} onClick={decrementServerNumber}>-</Button>
        <Button disabled={isLoading} data-testid="server-number-btn-inc" theme={'bordered'} onClick={incrementServerNumber}>+</Button>
      </div>
    </>
  )
}
