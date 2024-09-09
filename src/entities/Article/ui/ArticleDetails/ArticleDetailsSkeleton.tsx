import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import s from './ArticleDetails.module.scss'
export const ArticleDetailsSkeleton = () => {
  return (
    <>
        <Skeleton className={s.avatar} radius={'50%'} width={200} height={200} />
        <Skeleton className={s.title} width={300} height={50} />
        <Skeleton className={s.title} width={500} height={50} />
        <Skeleton width={'100%'} height={200} />
    </>
  )
}
