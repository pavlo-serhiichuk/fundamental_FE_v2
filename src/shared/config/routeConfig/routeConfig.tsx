import {RouteProps} from 'react-router/dist/lib/components'
import MainPage from 'pages/MainPage/ui/MainPage'
import {AboutPage} from 'pages/AboutPage'

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about'
}

export const AppPaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: 'about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: AppPaths.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: AppPaths.about,
    element: <AboutPage />
  }
}