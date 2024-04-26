import { lazy } from 'react'

export const MainPage = lazy(() => new Promise((resolve: any) =>
  setTimeout(() => { resolve(import('./MainPage')) }, 1400))
)
