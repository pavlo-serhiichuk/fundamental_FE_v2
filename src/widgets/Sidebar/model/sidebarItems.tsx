import type React from 'react'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutUsIcon from 'shared/assets/icons/about_us.svg'
import ProfileIcon from 'shared/assets/icons/profile.svg'
import { AppPaths } from 'shared/config/routeConfig/routeConfig'

export interface ISidebarItem {
  name: string
  path: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>> | string
}

export const sidebarItems: ISidebarItem[] = [
  {
    name: 'About us',
    path: AppPaths.about,
    Icon: AboutUsIcon
  }, {
    name: 'Main',
    path: AppPaths.main,
    Icon: MainIcon
  }, {
    name: 'Profile',
    path: AppPaths.profile,
    Icon: ProfileIcon
  }
]
