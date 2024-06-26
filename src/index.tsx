import { render } from 'react-dom'
import './shared/config/i18next/i18next'
import './app/styles/index.scss'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
  , document.getElementById('root'))
