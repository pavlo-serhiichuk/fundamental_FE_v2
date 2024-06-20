import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import s from './ThemeSwitcher.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import ThemeCircle from 'shared/assets/icons/circle.svg'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={'clear'}
      onClick={toggleTheme}
      className={cls(s.ThemeSwitcher, { [s.light]: theme === 'light', [s.dark]: theme === 'dark' }, [className])}
    >
      <ThemeCircle />
    </Button>
  )
}
