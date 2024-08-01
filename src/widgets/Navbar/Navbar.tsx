import { type FC, useState } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { SignInModal } from 'features/SignIn'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)

  const onCloseSignInModal = () => {
    setIsSignInModalOpen(false)
  }

  const onOpen = () => {
    setIsSignInModalOpen(true)
  }

  return (
    <div className={cls(s.Navbar, {}, [className])}>
      <div>{t('Never give up')}</div>
      <div className={s.links}>
        <AppLink to={'/about'} theme={'navigation'}>{t('To about')}</AppLink>
        <AppLink to={'/'} theme={'navigation'}>{t('To main')}</AppLink>
        <Button onClick={onOpen} theme={'bordered'}>{t('Sign in')}</Button>
      </div>
      <SignInModal isOpen={isSignInModalOpen} onClose={onCloseSignInModal} />
    </div>
  )
}
