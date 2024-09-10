import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './ArticleBlockCodeComponent.module.scss'
import { type ArticleCodeBlock } from 'entities/Article'
import { Code } from 'shared/ui/Code/Code'

interface ArticleBlockCodeComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleBlockCodeComponent: FC<ArticleBlockCodeComponentProps> = (props) => {
  const { className, block } = props

  return (
    <div className={cls(s.ArticleBlockCodeComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  )
}
