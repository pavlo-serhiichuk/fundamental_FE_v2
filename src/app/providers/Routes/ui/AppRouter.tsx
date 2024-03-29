import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(route => (
        <Route key={route.path} path={route.path} element={(
          <div className="page-content">
            <Suspense fallback={<PageLoader />}>
              {route.element}
            </Suspense>
          </div>
        )} />
      ))}
    </Routes>
  )
}
