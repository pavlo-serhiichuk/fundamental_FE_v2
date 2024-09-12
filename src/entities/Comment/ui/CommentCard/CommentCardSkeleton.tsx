import { cls } from 'shared/lib/classNames/classNames'
import s from './CommentCard.module.scss'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

export const CommentCardSkeleton = () => {
  return (
    <div className={cls(s.CommentCard)}>
      <div className={s.header}>
        <Skeleton width={30} height={30} radius={'50%'}/>
        <Skeleton width={50} height={20}/>
      </div>
      <Skeleton width={200} height={20}/>
    </div>
  )
}
