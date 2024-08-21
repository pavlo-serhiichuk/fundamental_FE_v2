import { type FC, useState } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './Sidebar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LandSwitcher/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'
import { sidebarItems } from 'widgets/Sidebar/model/sidebarItems'
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props
  const [closed, setClosed] = useState(false)

  const onToggle = () => { setClosed(prev => !prev) }

  return (
    <div data-testid="sidebar" className={cls(s.Sidebar, { [s.closed]: closed }, [className])}>
      <div className={s.links}>
        {sidebarItems.map(item => (
          <SidebarItem key={item.path} item={item} />
        ))}
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
      <Button className={s.toggleBtn} theme={'nav-squad-m'} data-testid="sidebar-toggle-btn" onClick={onToggle}>{closed ? ">" : "<"}</Button>
    </div>
  )
}
