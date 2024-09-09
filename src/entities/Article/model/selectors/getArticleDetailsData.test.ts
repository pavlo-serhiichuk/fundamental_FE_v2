import { type StateSchema } from 'app/providers/StoreProvider'
import { articleMockState } from 'entities/Article/model/slice/articleState'
import { type ArticleDetailsSchema, getArticleDetailsData, getArticleDetailsError, getArticleDetailsLoading } from 'entities/Article'

describe('getArticleDetailsData.test', () => {
  test('get data', () => {
    const mockData = articleMockState() as ArticleDetailsSchema
    const state: DeepPartial<StateSchema> = { articleDetails: mockData }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(mockData.data)
  })
  test('get isLoading', () => {
    const mockData = articleMockState(true) as ArticleDetailsSchema
    const state: DeepPartial<StateSchema> = { articleDetails: mockData }
    expect(getArticleDetailsLoading(state as StateSchema)).toBe(true)
  })
  test('get error', () => {
    const mockData = articleMockState(false, 'error') as ArticleDetailsSchema
    const state: DeepPartial<StateSchema> = { articleDetails: mockData }
    expect(getArticleDetailsError(state as StateSchema)).toBe('error')
  })
})
