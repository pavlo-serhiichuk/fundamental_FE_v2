import { memo } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './SidebarItem.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { type ISidebarItem } from '../../model/sidebarItems'

interface SidebarItemProps {
  className?: string
  item: ISidebarItem
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { t } = useTranslation()
  const { className, item } = props

  return (
    <AppLink
      to={item.path}
      theme={'navigation'}
      className={cls(s.SidebarItem, {}, [className])}
    >
      <item.Icon />
      <span>{t(item.name)}</span>
    </AppLink>
  )
})
