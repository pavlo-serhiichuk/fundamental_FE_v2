import 'app/styles/index.scss'
import { Suspense } from 'react'
import { type Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (Story: any) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
}

export const RouterDecorator = (Story: any) => {
  return (
    <BrowserRouter>
      <Suspense fallback="...">
        <Story />
      </Suspense>
    </BrowserRouter>
  )
}
