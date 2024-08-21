import { Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/PageLoader'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'

export const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData)
  const routes = useMemo(() => {
    return Object.values(routeConfig).filter((route) => {
      return !(!isAuth && route.authOnly)
    })
  }, [isAuth])

  return (
    <div className="page-content">
      <Routes>
        {routes.map(route => (
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
