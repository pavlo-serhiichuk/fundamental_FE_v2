import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './ArticleBlockImageComponent.module.scss'

interface ArticleBlockImageComponentProps {
  className?: string
}

export const ArticleBlockImageComponent: FC<ArticleBlockImageComponentProps> = (props) => {
  const { t } = useTranslation()
  const { className } = props

  return (
    <div className={cls(s.ArticleBlockImageComponent, {}, [className])}>
      {t('')}
    </div>
  )
}
