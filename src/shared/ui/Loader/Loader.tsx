import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import s from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = (props) => {
  const { t } = useTranslation()
  const { className } = props

  return (
    <div className={cls(s.Loader, {}, [className])}>
      {t('loading')}...
    </div>
  )
}
