import { memo } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import s from './ThemeSwitcher.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import ThemeCircle from 'shared/assets/icons/circle.svg'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={'clear'}
      onClick={toggleTheme}
      className={cls(s.ThemeSwitcher, { [s.light]: theme === 'light', [s.dark]: theme === 'dark', [s.green]: theme === 'green' }, [className])}
    >
      <ThemeCircle />
    </Button>
  )
})
