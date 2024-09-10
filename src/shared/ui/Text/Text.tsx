import { type FC, memo } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './Text.module.scss'

type TextTheme = 'content' | 'error' | 'warn'
type TextSize = 'text_size_s' | 'text_size_m' | 'text_size_l'
interface TextProps {
  className?: string
  title?: string | undefined
  text?: string | undefined
  theme?: TextTheme
  size?: TextSize
}

export const Text = memo((props: TextProps) => {
  const { className, title, text, theme = 'content', size = 'text_size_m' } = props
  const { t } = useTranslation()

  return (
    <div className={cls(s.Text, { [s[theme]]: true }, [className, s[size]])}>
      {title ? <p>{t(title)}</p> : null}
      {text ? <span>{t(text)}</span> : null}
    </div>
  )
})
