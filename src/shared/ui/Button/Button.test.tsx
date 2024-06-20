import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe("Button ", () => {
  test('render', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('with theme', () => {
    render(<Button theme={'clear'}>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('clear')
    screen.debug()
  })
})
