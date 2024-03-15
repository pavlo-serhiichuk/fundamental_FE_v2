import React, {FC} from 'react'
import {cls} from 'shared/lib/classNames/classNames'
import s from './Navbar.module.scss'
import {AppLink} from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const {className} = props

  return (
    <div className={cls(s.Navbar, {}, [className])}>
      <div>logo</div>
      <div className={s.links}>
        <AppLink to={'/about'} theme={'navigation'}>To about</AppLink>
        <AppLink to={'/'} theme={'navigation'}>To main</AppLink>
        <AppLink to={'#'} theme={'navigationBorder'}>TEST</AppLink>
      </div>
    </div>
  );
};