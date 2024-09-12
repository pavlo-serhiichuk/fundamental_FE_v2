import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './CommentCard.module.scss'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { type Comment } from '../../module/types/comment'

interface CommentCardProps {
  className?: string
  comment: Comment
}

export const CommentCard: FC<CommentCardProps> = (props) => {
  const { className, comment } = props

  return (
    <div className={cls(s.CommentCard, {}, [className])}>
      <div className={s.header}>
        <Avatar size={30} src={comment.user?.avatar} alt={'comment'} />
        <span>{comment.user?.name}</span>
      </div>
      {comment.text}
    </div>
  )
}
