import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticleSchema } from 'entities/Article/model/types/ArticleSchema'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById'
import { articleInitialState } from './articleState'

export const articleSlice = createSlice({
  name: 'articleSlice',
  initialState: articleInitialState,
  reducers: {
    set: (state, action: PayloadAction) => {}
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state: ArticleSchema) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleById.fulfilled, (state: ArticleSchema, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchArticleById.rejected, (state: ArticleSchema, action: PayloadAction<string | undefined>) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: articleSliceActions } = articleSlice
export const { reducer: articleSliceReducer } = articleSlice
