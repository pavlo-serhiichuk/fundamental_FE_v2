import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

import { renderWrappedComponent } from 'shared/lib/tests/renderWrappedComponent/renderWrappedComponent'

describe('Sidebar', () => {
  test('render', () => {
    renderWrappedComponent(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('open', () => {
    renderWrappedComponent(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle-btn')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('closed')
    screen.debug()
  })
})
