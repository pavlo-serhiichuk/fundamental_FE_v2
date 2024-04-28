import { lazy } from 'react'

export const AboutPage = lazy(() => new Promise((resolve: any) =>
  setTimeout(() => resolve(import('./AboutPage')), 1400))
)
