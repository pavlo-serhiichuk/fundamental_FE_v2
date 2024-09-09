import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './ArticleBlockTextComponent.module.scss'

interface ArticleBlockTextComponentProps {
  className?: string
}

export const ArticleBlockTextComponent: FC<ArticleBlockTextComponentProps> = (props) => {
  const { t } = useTranslation()
  const { className } = props

  return (
    <div className={cls(s.ArticleBlockTextComponent, {}, [className])}>
      {t('')}
    </div>
  )
}
