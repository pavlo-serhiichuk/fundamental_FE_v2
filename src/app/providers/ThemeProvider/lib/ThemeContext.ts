import { createContext, type Dispatch, type SetStateAction } from 'react'

export type Theme = 'dark' | 'light' | 'green'
export const LOCAL_STORAGE_THEME_KEY = 'theme'

interface CreateContextProps {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<CreateContextProps>({} as CreateContextProps)
