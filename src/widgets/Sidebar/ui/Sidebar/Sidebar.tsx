import { type FC, useState } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './Sidebar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import { useTranslation } from 'react-i18next'
import { LangSwitcher } from 'shared/ui/LandSwitcher/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutUsIcon from 'shared/assets/icons/about_us.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props
  const [closed, setClosed] = useState(false)
  const { t } = useTranslation()

  const onToggle = () => { setClosed(prev => !prev) }

  return (
    <div data-testid="sidebar" className={cls(s.Sidebar, { [s.closed]: closed }, [className])}>
      <div className={s.links}>
        <AppLink className={s.appLink} to={'/about'} theme={'navigation'}>
          <MainIcon />
           <span className={cls(s.linkText, { [s.linkTextOpen]: closed })}>{t('To about')}</span>
        </AppLink>
        <AppLink className={s.appLink} to={'/'} theme={'navigation'}>
          <AboutUsIcon />
           <span className={cls(s.linkText, { [s.linkTextOpen]: closed })}>{t('To main')}</span>
        </AppLink>
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
      <Button className={s.toggleBtn} theme={'nav-squad-m'} data-testid="sidebar-toggle-btn" onClick={onToggle}>{closed ? ">" : "<"}</Button>
    </div>
  )
}
