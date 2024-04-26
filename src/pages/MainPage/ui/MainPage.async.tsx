import { lazy } from 'react'

export const MainPage = lazy(() => new Promise((resolve) =>
  setTimeout(() => { resolve(import('./MainPage')) }, 1400))
)
