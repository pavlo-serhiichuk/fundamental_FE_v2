import 'app/styles/index.scss'
import { Suspense } from 'react'
import { type Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import i18nextForTests from 'shared/config/i18next/i18nextForTests'
import { I18nextProvider } from 'react-i18next'
import { signInReducer } from 'features/SignIn'
import { profileReducer } from 'entities/Profile'

export const ThemeDecorator = (theme: Theme) => (Story: any) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
}

export const RouterDecorator = (Story: any) => {
  return (
    <BrowserRouter>
      <Suspense fallback="...">
        <Story />
      </Suspense>
    </BrowserRouter>
  )
}

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  signIn: signInReducer,
  profile: profileReducer
}

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: any) => {
  return (
    <StoreProvider
      initialState={state}
      asyncReducers={{ ...defaultAsyncReducers }}
    >
        <Story />
    </StoreProvider>
  )
}

export const TranslationDecorator = (Story: any) => {
  return (
    <I18nextProvider i18n={i18nextForTests}>
        <Story />
    </I18nextProvider>
  )
}

export const PageContentDecorator = (Story: any) => {
  return (
    <div className={'page-content'}>
        <Story />
    </div>
  )
}
