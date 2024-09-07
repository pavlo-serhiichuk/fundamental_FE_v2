import { Suspense, useEffect } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { cls } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/Routes/ui/AppRouter'
import { Navbar } from 'widgets/Navbar/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserIsInit, userActions } from 'entities/User'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const isInit = useSelector(getUserIsInit)

  useEffect(() => {
    dispatch(userActions.initUserAuthData())
  }, [dispatch])

  return (
    <Suspense fallback={'Translations loading'}>
      <div className={cls('app', {}, [theme])}>
        <Navbar />
        <div className="app-content">
          <Sidebar />
          {isInit && <AppRouter />}
        </div>
      </div>
    </Suspense>
  )
}

export default App
