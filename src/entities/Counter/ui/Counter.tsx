import { type FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterValue } from '../state/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../state/slice/counterSlice'
import { Button } from 'shared/ui/Button/Button'

export const Counter: FC = () => {
  const dispatch = useDispatch()
  const number = useSelector(getCounterValue)
  const increment = () => dispatch(counterActions.increment())
  const decrement = () => dispatch(counterActions.decrement())

  return (
    <div>
      <br/>
      <br/>
      <h1 data-testid="counter-number">{number}</h1>
      <br/>
      <Button data-testid="counter-btn-decrement" theme={'bordered'} onClick={decrement}>-</Button>
      <Button data-testid="counter-btn-increment" theme={'bordered'} onClick={increment}>+</Button>
    </div>
  )
}
