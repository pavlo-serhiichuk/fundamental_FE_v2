import { fireEvent, screen } from '@testing-library/react'
import { Counter } from './Counter'

import { renderWrappedComponent } from 'shared/lib/renderWrappedComponent/renderWrappedComponent'

describe('Counter', () => {
  beforeEach(() => {
    renderWrappedComponent(<Counter />, { initialState: { counter: { number: 10 } } })
  })
  test('render', () => {
    expect(screen.getByTestId("counter-number")).toHaveTextContent('10')
  })

  test('increment', () => {
    const incBtn = screen.getByTestId('counter-btn-increment')
    fireEvent.click(incBtn)
    expect(screen.getByTestId("counter-number")).toHaveTextContent('11')
  })

  test('decrement', () => {
    const decBtn = screen.getByTestId('counter-btn-decrement')
    fireEvent.click(decBtn)
    expect(screen.getByTestId('counter-number')).toHaveTextContent('9')
  })
})
