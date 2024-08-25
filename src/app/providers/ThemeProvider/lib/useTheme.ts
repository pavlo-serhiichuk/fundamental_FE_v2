import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, type Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    let newTheme: Theme
    switch (theme) {
      case 'dark':
        newTheme = 'light'
        break
      case 'light':
        newTheme = 'green'
        break
      case 'green':
        newTheme = 'dark'
        break
      default:
        newTheme = 'light'
    }

    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
