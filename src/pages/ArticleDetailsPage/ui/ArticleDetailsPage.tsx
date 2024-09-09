import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Article/ui/ArticleDetails/ArticleDetails'

interface ArticlesPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props

  return (
    <div className={cls(s.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails />
    </div>
  )
}

export default ArticleDetailsPage
