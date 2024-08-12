import { type ButtonHTMLAttributes, memo, type ReactNode } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './Button.module.scss'

export type ButtonTheme = 'clear' | 'bordered' | 'nav-squad-m' | 'content-squad-m'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  disabled?: boolean
  children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
  const { className, theme, children, disabled, ...otherProps } = props

  return (
    <button
      className={cls(s.Button, { [s.disabled]: disabled }, [className, s[theme]])}
      {...otherProps}>
      {children}
    </button>
  )
})
