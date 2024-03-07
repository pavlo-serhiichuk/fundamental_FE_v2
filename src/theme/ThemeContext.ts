import {createContext, Dispatch, SetStateAction} from 'react'

export type Theme = 'dark' | 'light'
export const LOCAL_STORAGE_THEME_KEY = 'theme'

interface CreateContextProps {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<CreateContextProps>({} as CreateContextProps)