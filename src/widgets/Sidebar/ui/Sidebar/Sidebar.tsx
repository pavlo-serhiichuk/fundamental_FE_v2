import React, {FC, useState} from 'react'
import {cls} from 'shared/lib/classNames/classNames'
// import {useTranslation} from 'react-i18next'
import s from './Sidebar.module.scss'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher'

interface SidebarProps {
  className?: string;
}

export const Sidebar:FC<SidebarProps> = (props) => {
  // const {t} = useTranslation()
  const { className } = props
  const [closed, setClosed] = useState(false)

  const onToggle = () => setClosed(prev => !prev)

  return (
    <div className={cls(s.Sidebar, {[s.closed]: closed}, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        {/*<LangSwitcher />*/}
      </div>
    </div>
  );
};