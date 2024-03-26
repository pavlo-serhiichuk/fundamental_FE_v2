import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
// import {useTranslation} from 'react-i18next'
import s from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  // const {t} = useTranslation()
  const { className } = props

  return (
    <div className={cls(s.NotFoundPage, {}, [className])}>

    </div>
  )
}
