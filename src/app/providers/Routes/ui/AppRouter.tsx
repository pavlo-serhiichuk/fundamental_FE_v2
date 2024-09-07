import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { type AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'
import { ProtectedRoute } from 'app/providers/Routes/ui/ProtectedRoute'

export const AppRouter = () => {
  const renderWithProtection = (route: AppRoutesProps) => {
    const element = <Suspense fallback={<PageLoader />}>
      {route.element}
    </Suspense>
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? <ProtectedRoute>{element}</ProtectedRoute> : element
        }
      />
    )
  }

  return (
    <div className="page-content">
      <Routes>
        {Object.values(routeConfig).map(renderWithProtection)}
      </Routes>
    </div>
  )
}
