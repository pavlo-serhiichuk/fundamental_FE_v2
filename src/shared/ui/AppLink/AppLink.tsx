import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './AppLink.module.scss'
import { NavLink, type LinkProps } from 'react-router-dom'

export type AppLinkThemes = 'content' | 'navigation' | 'navigationBorder' | 'contentBorder'

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkThemes
  to: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, theme = 'content', to, children, ...otherProps } = props

  return (
    <NavLink
      to={to}
      className={cls(s.AppLink, {}, [className, s[theme]])}
      {...otherProps}
    >
      {children}
    </NavLink>
  )
}
