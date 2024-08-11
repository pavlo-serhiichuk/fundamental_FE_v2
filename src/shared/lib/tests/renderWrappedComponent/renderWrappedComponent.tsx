import { type ReactNode } from 'react'
import { render } from '@testing-library/react'
import i18nextForTests from 'shared/config/i18next/i18nextForTests'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type DeepPartial } from '@reduxjs/toolkit'

export interface renderWrappedComponentOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export function renderWrappedComponent (component: ReactNode, options: renderWrappedComponentOptions = {}) {
  const { route = '/', initialState } = options
  return render(
    <StoreProvider initialState={initialState}>
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nextForTests}>
        {component}
      </I18nextProvider>
    </MemoryRouter>
    </StoreProvider>
  )
}
