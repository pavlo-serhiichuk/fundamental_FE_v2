import { type FC, useEffect } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './ArticleDetails.module.scss'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { type Article, getArticleDetailsData, getArticleDetailsError, getArticleDetailsLoading } from 'entities/Article'
import { ArticleDetailsSkeleton } from 'entities/Article/ui/ArticleDetails/ArticleDetailsSkeleton'
import { Text } from 'shared/ui/Text/Text'
import { Avatar } from 'shared/ui/Avatar/Avatar'

interface ArticleDetailsProps {
  className?: string
}

export const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const articleDetails = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsLoading)
  const error = useSelector(getArticleDetailsError)
  const { className } = props
  const { id } = useParams<{ id: string | undefined }>()

  useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id))
    }
  }, [dispatch, id])

  const renderBlocks = () => {
    return null
  }

  const Content = () => {
    switch (true) {
      case isLoading:
        return <ArticleDetailsSkeleton />
      case !!error:
        return <Text title={t('There is no such an article')} text={'You can try another article'} />
      // case !!articleDetails:
      //   return <div>
      //     <Avatar src={articleDetails?.image || ''} alt={} size={200} />
      //     {renderBlocks()}
      //   </div>
      default:
        return null
    }
  }

  return (
    <div className={cls(s.ArticleDetails, {}, [className])}>
      <Content />
    </div>
  )
}
