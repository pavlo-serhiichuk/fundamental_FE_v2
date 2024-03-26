import { lazy } from 'react'

export const MainPage = lazy(() => new Promise((resolve: (par: any) => void): any =>
  setTimeout(() => { resolve(import('./MainPage')) }, 1400))
)
