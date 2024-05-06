import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './PageLoader.module.scss'
import { Loader } from 'shared/ui/Loader/Loader'

interface PageLoaderProps {
  className?: string
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props

  return (
    <div className={cls(s.PageLoader, {}, [className])}>
      <Loader />
    </div>
  )
}
