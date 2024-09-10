import { type FC } from 'react'
import { cls } from 'shared/lib/classNames/classNames'
import s from './ArticleBlockTextComponent.module.scss'
import { type ArticleTextBlock } from 'entities/Article'
import { Text } from 'shared/ui/Text/Text'
interface ArticleBlockTextComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleBlockTextComponent: FC<ArticleBlockTextComponentProps> = (props) => {
  const { className, block } = props

  return (
    <div className={cls(s.ArticleBlockTextComponent, {}, [className])}>
       {block?.title && <Text title={block.title} />}
      {block.paragraphs.map(paragraph => <Text title={paragraph} size={'text_size_s'} className={s.paragraph} />)}
    </div>
  )
}
