import { type ThunkConfig } from 'app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article/model/types/article'

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'article/fetchArticleById',
  async (articleId, thunkAPI) => {
    const { extra } = thunkAPI
    try {
      if (articleId) {
        const response = await extra.api.get('/articles/' + articleId)
        return response.data
      } else {
        throw new Error()
      }
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  }
)
