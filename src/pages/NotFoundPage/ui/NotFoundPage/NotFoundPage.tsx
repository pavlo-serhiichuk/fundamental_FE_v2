import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  return (
    <div className={cls(s.NotFoundPage, {}, [className])}>
      {t('Not found page')}
    </div>
  )
}
