import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './ArticleBlockImageComponent.module.scss'
import { type ArticleImageBlock } from 'entities/Article'
import { Text } from 'shared/ui/Text/Text'

interface ArticleBlockImageComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleBlockImageComponent: FC<ArticleBlockImageComponentProps> = (props) => {
  const { className, block } = props

  return (
    <div className={cls(s.ArticleBlockImageComponent, {}, [className])}>
      <img src={block.src} alt={block.title} />
      <Text text={block.title} />
    </div>
  )
}
