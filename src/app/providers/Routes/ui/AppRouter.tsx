import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'

export const AppRouter = () => {
  return (
    <div className="page-content">
      <Routes>
        {Object.values(routeConfig).map(route => (
          <Route key={route.path} path={route.path} element={
            <Suspense fallback={<PageLoader />}>
              {route.element}
            </Suspense>
          } />
        ))}
      </Routes>
    </div>
  )
}
