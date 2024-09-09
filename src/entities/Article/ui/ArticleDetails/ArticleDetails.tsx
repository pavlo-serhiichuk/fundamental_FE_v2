import { type FC, useEffect } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './ArticleDetails.module.scss'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getArticleDetailsError, getArticleDetailsLoading } from 'entities/Article'
import { ArticleDetailsSkeleton } from 'entities/Article/ui/ArticleDetails/ArticleDetailsSkeleton'
import { Text } from 'shared/ui/Text/Text'

interface ArticleDetailsProps {
  className?: string
}

export const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  // const data = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsLoading)
  const error = useSelector(getArticleDetailsError)
  const { className } = props
  const { id } = useParams<{ id: string | undefined }>()
  useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  const Content = () => {
    switch (true) {
      case isLoading:
        return <ArticleDetailsSkeleton />
      case !!error:
        return <Text title={t('There is no such an article')} text={'You can try another article'} />
      default:
        return <div>{t('content')}</div>
    }
  }

  return (
    <div className={cls(s.ArticleDetails, {}, [className])}>
      <Content />
    </div>
  )
}
