import { type FC, useState } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { SignInModal } from 'features/SignIn'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { userActions } from 'entities/User'
import { AUTH_USER_DATA } from 'shared/const/localStorage'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
  const auth = useSelector(getUserAuthData)

  const onCloseSignInModal = () => {
    setIsSignInModalOpen(false)
  }

  const onOpen = () => {
    setIsSignInModalOpen(true)
  }

  const onSignOut = () => {
    dispatch(userActions.setUserAuthData({}))
    localStorage.removeItem(AUTH_USER_DATA)
  }

  return (
    <div className={cls(s.Navbar, {}, [className])}>
      <div>{t('Never give up')}</div>
      <div className={s.links}>
        <AppLink to={'/about'} theme={'navigation'}>{t('To about')}</AppLink>
        <AppLink to={'/'} theme={'navigation'}>{t('To main')}</AppLink>
        {auth?.id
          ? <Button onClick={onSignOut} theme={'bordered'}>{t('Sign out')}</Button>
          : <Button onClick={onOpen} theme={'bordered'}>{t('Sign in')}</Button>
        }
      </div>
      <SignInModal isOpen={isSignInModalOpen} onClose={onCloseSignInModal} />
    </div>
  )
}
