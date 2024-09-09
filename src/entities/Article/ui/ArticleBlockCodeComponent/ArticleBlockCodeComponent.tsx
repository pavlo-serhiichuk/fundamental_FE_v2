import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './ArticleBlockCodeComponent.module.scss'

interface ArticleBlockCodeComponentProps {
  className?: string
}

export const ArticleBlockCodeComponent: FC<ArticleBlockCodeComponentProps> = (props) => {
  const { t } = useTranslation()
  const { className } = props

  return (
    <div className={cls(s.ArticleBlockCodeComponent, {}, [className])}>
      {t('')}
    </div>
  )
}
