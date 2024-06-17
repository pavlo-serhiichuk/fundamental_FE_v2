import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'

export type AppLinkThemes = 'content' | 'navigation' | 'navigationBorder' | 'contentBorder'

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkThemes
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, theme = 'content', to, children, ...otherProps } = props

  return (
    <Link
      to={to}
      className={cls(s.AppLink, {}, [className, s[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
