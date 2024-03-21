import React, { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './Navbar.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={cls(s.Navbar, {}, [className])}>
      <div>{t('Never give up')}</div>
      <div className={s.links}>
        <AppLink to={'/about'} theme={'navigation'}>{t('To about')}</AppLink>
        <AppLink to={'/'} theme={'navigation'}>{t('To main')}</AppLink>
        <AppLink to={'#'} theme={'navigationBorder'}>TEST</AppLink>
      </div>
    </div>
  )
}
