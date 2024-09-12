import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './ArticleDetailsComments.module.scss'
import { CommentList } from 'entities/Comment/ui/CommentList/CommentList'
import {
  articleDetailsCommentsReducer,
  getArticleComments
} from 'features/ArticleDetailsComments/model/slice/articleDetailsCommentsSlice'
import {
  fetchArticleCommentsById
} from 'features/ArticleDetailsComments/model/services/fetchArticleCommentsById/fetchArticleCommentsById'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getArticleDetailsCommentsLoading } from 'features/ArticleDetailsComments/model/selectors/articleDetailsSelectors'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader'

interface ArticleDetailsCommentsProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = (props) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  const commentsIsLoading = useSelector(getArticleDetailsCommentsLoading)
  const comments = useSelector(getArticleComments.selectAll)

  useInitialEffect(async () => {
    dispatch(fetchArticleCommentsById(id))
  })

  return (
  <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cls(s.ArticleDetailsComments, {}, [className])}>
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
   </DynamicModuleLoader>
  )
}
