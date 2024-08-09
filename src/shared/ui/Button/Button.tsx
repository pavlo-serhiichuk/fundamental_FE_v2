import { type ButtonHTMLAttributes, type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './Button.module.scss'

export type ButtonTheme = 'clear' | 'bordered' | 'nav-squad-m' | 'content-squad-m'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, disabled, ...otherProps } = props

  return (
    <button
      className={cls(s.Button, { [s.disabled]: disabled }, [className, s[theme]])}
      {...otherProps}>
      {children}
    </button>
  )
}
