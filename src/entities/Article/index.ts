export type { Article, ArticleBlock, ArticleCodeBlock, ArticleImageBlock, ArticleTextBlock } from './model/types/article'
export type { ArticleDetailsSchema } from './model/types/ArticleDetailsSchema'
export { articleSliceActions, articleSliceReducer } from './model/slice/articleSlice'
export {
  getArticleDetailsData,
  getArticleDetailsLoading,
  getArticleDetailsError
} from './model/selectors/getArticleDetailsData'
