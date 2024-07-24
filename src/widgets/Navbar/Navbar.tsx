import { type FC, useState } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import { Portal } from 'shared/ui/Portal/Portal'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  const onOpen = () => {
    setIsOpen(true)
  }

  return (
    <div className={cls(s.Navbar, {}, [className])}>
      <div>{t('Never give up')}</div>
      <div className={s.links}>
        <AppLink to={'/about'} theme={'navigation'}>{t('To about')}</AppLink>
        <AppLink to={'/'} theme={'navigation'}>{t('To main')}</AppLink>
        <Button onClick={onOpen} theme={'bordered'}>{t('Sign in')}</Button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci debitis ipsa ipsam quisquam. Animi dicta ipsam, modi quis similique suscipit temporibus.')}
      </Modal>
    </div>
  )
}
