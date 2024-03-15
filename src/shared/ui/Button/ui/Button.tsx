import {ButtonHTMLAttributes, FC} from 'react'
import {cls} from 'shared/lib/classNames/classNames'
// import {useTranslation} from 'react-i18next'
import s from './Button.module.scss'

export type ButtonTheme = 'clear'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme
}

export const Button:FC<ButtonProps> = (props) => {
  // const {t} = useTranslation()
  const { className, theme, children, ...otherProps } = props

  return (
    <button className={cls(s.Button, {}, [className, s[theme]])} {...otherProps}>
      {children}
    </button>
  );
};