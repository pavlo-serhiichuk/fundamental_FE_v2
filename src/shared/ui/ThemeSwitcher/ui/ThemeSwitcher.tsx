import React, {FC} from 'react'
import {cls} from 'shared/lib/classNames/classNames'
// import {useTranslation} from 'react-i18next'
import s from './ThemeSwitcher.module.scss'
import {useTheme} from 'app/providers/ThemeProvider'
import ThemeCircle from 'shared/assets/icons/circle.svg'
import {Button} from 'shared/ui/Button'

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher:FC<ThemeSwitcherProps> = (props) => {
  // const {t} = useTranslation()
  const { className } = props
  const {theme, toggleTheme} = useTheme()

  return (
    <Button
      theme={'clear'}
      onClick={toggleTheme}
      className={cls(s.ThemeSwitcher, {}, [className])}
    >
      {/*@ts-ignore*/}
      <ThemeCircle fill={theme === 'light' ? '#000': '#fff'} />
    </Button>
  );
};