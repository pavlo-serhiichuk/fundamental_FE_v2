import { type ReactElement, type ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { AppPaths } from 'shared/config/routeConfig/routeConfig'
import { getUserAuthData } from 'entities/User'

interface ProtectedRouteProps {
  children: ReactElement<ReactNode>
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()
  if (!auth) {
    return <Navigate to={AppPaths.main} state={{ from: location }} replace />
  }

  return children
}
