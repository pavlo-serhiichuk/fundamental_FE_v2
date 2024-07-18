import { type ButtonHTMLAttributes, type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './Button.module.scss'

export type ButtonTheme = 'clear' | 'bordered'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, ...otherProps } = props

  return (
    <button
      className={cls(s.Button, {}, [className, s[theme]])}
      {...otherProps}>
      {children}
    </button>
  )
}
