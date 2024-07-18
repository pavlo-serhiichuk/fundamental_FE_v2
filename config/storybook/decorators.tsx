import 'app/styles/index.scss'
import { Suspense } from 'react'
import { type Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { BrowserRouter } from 'react-router-dom'

export const ThemeDecorator = (theme: Theme) => (Story: any) => {
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
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
