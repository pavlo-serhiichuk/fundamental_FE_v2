import { type RouteProps } from 'react-router/dist/lib/components'
import MainPage from 'pages/MainPage/ui/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound'
}

export const AppPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: 'about',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: AppPaths.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: AppPaths.about,
    element: <AboutPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppPaths.notFound,
    element: <NotFoundPage />
  }
}
