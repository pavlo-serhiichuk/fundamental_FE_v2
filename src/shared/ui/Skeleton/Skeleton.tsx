import { type CSSProperties, type FC, memo } from 'react'
import s from './Skeleton.module.scss'
import { cls } from 'shared/lib/classNames/classNames'

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  radius?: string
  marginTop?: string | number
}

export const Skeleton: FC<SkeletonProps> = memo((props) => {
  const { className, height, width, radius, marginTop } = props

  const styles: CSSProperties = {
    height, width, borderRadius: radius, marginTop
  }

  return (
    <div
      style={styles}
      className={cls(s.Skeleton, {}, [className])}>
    </div>
  )
})
