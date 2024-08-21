import { type ButtonHTMLAttributes, memo, type ReactNode } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './Button.module.scss'

export type ButtonTheme = 'clear' | 'bordered' | 'nav-squad-m' | 'content-squad-m' | 'cancel'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  disabled?: boolean | undefined
  children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
  const { className, theme = 'clear', children, disabled = false, ...otherProps } = props

  return (
    <button
      className={cls(s.Button, { [s.disabled]: disabled }, [className, s[theme]])}
      {...otherProps}>
      {children}
    </button>
  )
})
