import { type FC, memo } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './Text.module.scss'

type TextTheme = 'content' | 'error' | 'warn'
interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export const Text = memo((props: TextProps) => {
  const { className, title, text, theme = 'content' } = props
  const { t } = useTranslation()

  return (
    <div className={cls(s.Text, { [s[theme]]: true }, [className])}>
      {title ? <p>{t(title)}</p> : null}
      {text ? <span>{t(text)}</span> : null}
    </div>
  )
})
