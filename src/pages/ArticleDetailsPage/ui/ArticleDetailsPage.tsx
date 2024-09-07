import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './ArticleDetailsPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticlesPageProps> = (props) => {
  const { t } = useTranslation()
  const { className } = props

  return (
    <div className={cls(s.ArticlesPage, {}, [className])}>
      {t('Article details')}
    </div>
  )
}

export default ArticleDetailsPage
