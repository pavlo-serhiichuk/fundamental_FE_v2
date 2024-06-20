import type { StoryObj } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'

const ThemeDecorator = (theme: Theme) => (story: () => StoryObj) => {
  return (
    <div className={`app ${theme}`}>
      {story()}
    </div>
  )
}

export default ThemeDecorator
