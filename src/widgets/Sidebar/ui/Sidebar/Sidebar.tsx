import { type FC, useState } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './Sidebar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LandSwitcher'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props
  const [closed, setClosed] = useState(false)
  const { t } = useTranslation()

  const onToggle = () => { setClosed(prev => !prev) }

  return (
    <div className={cls(s.Sidebar, { [s.closed]: closed }, [className])}>
      <button onClick={onToggle}>{t('toggle')}</button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
