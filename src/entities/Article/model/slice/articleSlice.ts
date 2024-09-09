import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticleDetailsSchema } from 'entities/Article/model/types/ArticleDetailsSchema'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById'
import { articleInitialState } from './articleState'
import { type Article } from 'entities/Article'

export const articleSlice = createSlice({
  name: 'articleSlice',
  initialState: articleInitialState,
  reducers: {
    set: (state, action: PayloadAction) => {}
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state: ArticleDetailsSchema) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleById.fulfilled, (state: ArticleDetailsSchema, action: PayloadAction<Article>) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchArticleById.rejected, (state: ArticleDetailsSchema, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: articleSliceActions } = articleSlice
export const { reducer: articleSliceReducer } = articleSlice
