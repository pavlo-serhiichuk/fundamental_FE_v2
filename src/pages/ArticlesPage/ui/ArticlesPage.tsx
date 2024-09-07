import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './ArticlesPage.module.scss'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { t } = useTranslation()
  const { className } = props

  return (
    <div className={cls(s.ArticlesPage, {}, [className])}>
      {t('Articles page')}
    </div>
  )
}

export default ArticlesPage
