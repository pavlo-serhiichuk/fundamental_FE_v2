import { render } from 'react-dom'
import { Suspense } from 'react'
import './shared/config/i18next/i18next'
import './app/styles/index.scss'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import ErrorBoundary from 'app/providers/ErrorBoundary/ErrorBoundary'

render(
  <BrowserRouter>
    <Suspense fallback={'Translations loading'}>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </Suspense>
  </BrowserRouter>
  , document.getElementById('root'))
