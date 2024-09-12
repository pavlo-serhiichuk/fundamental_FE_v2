export type { Article, ArticleBlock, ArticleCodeBlock, ArticleImageBlock, ArticleTextBlock } from './model/types/article'
export type { ArticleDetailsSchema } from './model/types/ArticleDetailsSchema'
export { articleSliceActions, articleDetailsReducer } from './model/slice/articleDetailsSlice'
export {
  getArticleDetailsData,
  getArticleDetailsLoading,
  getArticleDetailsError
} from './model/selectors/getArticleDetailsData'
