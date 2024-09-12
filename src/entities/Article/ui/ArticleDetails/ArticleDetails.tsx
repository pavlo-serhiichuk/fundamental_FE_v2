import { type FC, useEffect, useLayoutEffect } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './ArticleDetails.module.scss'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  type ArticleBlock,
  articleDetailsReducer,
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading
} from 'entities/Article'
import { ArticleDetailsSkeleton } from 'entities/Article/ui/ArticleDetails/ArticleDetailsSkeleton'
import { Text } from 'shared/ui/Text/Text'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { ArticleBlockType } from 'entities/Article/model/consts/consts'
import { ArticleBlockTextComponent } from 'entities/Article/ui/ArticleBlockTextComponent/ArticleBlockTextComponent'
import { ArticleBlockImageComponent } from 'entities/Article/ui/ArticleBlockImageComponent/ArticleBlockImageComponent'
import { ArticleBlockCodeComponent } from 'entities/Article/ui/ArticleBlockCodeComponent/ArticleBlockCodeComponent'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader'

interface ArticleDetailsProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails: FC<ArticleDetailsProps> = (props) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const articleDetails = useSelector(getArticleDetailsData)
  const isLoading = useSelector(getArticleDetailsLoading)
  const error = useSelector(getArticleDetailsError)
  const { className } = props
  const { id } = useParams<{ id: string | undefined }>()

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id))
    }
  })

  const renderBlocks = (block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return <ArticleBlockTextComponent block={block} key={block.id} />
      case ArticleBlockType.CODE:
        return <ArticleBlockCodeComponent block={block} key={block.id} />
      case ArticleBlockType.IMAGE:
        return <ArticleBlockImageComponent block={block} key={block.id} />
      default:
        return null
    }
  }

  const Content = () => {
    switch (true) {
      case !!error:
        return <Text title={t('There is no such an article')} text={'You can try another article'} />
      case isLoading || !articleDetails:
        return <ArticleDetailsSkeleton />
      case !!articleDetails:
        return <div>
          <Avatar
            size={200}
            src={articleDetails?.image || ''}
            alt={articleDetails?.title || ''}
            className={s.avatar}
          />
          <Text size={'text_size_l'} title={articleDetails?.title} text={articleDetails?.subtitle} />
          {articleDetails?.blocks?.map(renderBlocks)}
        </div>
      default:
        return null
    }
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cls(s.ArticleDetails, {}, [className])}>
        <Content />
      </div>
    </DynamicModuleLoader>

  )
}
