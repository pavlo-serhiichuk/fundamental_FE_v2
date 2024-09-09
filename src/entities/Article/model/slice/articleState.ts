import { type ArticleDetailsSchema } from 'entities/Article'
import { ArticleBlockType } from 'entities/Article/model/consts/consts'

export const articleInitialState: ArticleDetailsSchema = {}

export const articleMockState = (isLoading = false, error = '') => ({
  isLoading,
  error,
  data: [{
    id: '1',
    title: 'Title',
    subtitle: 'Subtitle',
    image: 'image',
    views: 1111,
    created: '20.04.2020',
    userId: '1',
    type: 'SCIENCE',
    blocks: [
      {
        id: '1',
        type: ArticleBlockType.TEXT,
        title: 'Ніндзя код',
        paragraphs: [
          'Ніндзя-програмісти минулого використовували деякі хитрощі, щоб загострити розум тих, хто буде підтримувати їх код.\n\nГуру, що перевіряють код, шукають їх у тестових завданнях.\n\nПочатківці іноді використовують їх краще за ніндзя-програмістів.\n\nУважно перечитайте ці хитрощі і вирішіть хто ви є — ніндзя, початківець, чи може гуру перевірки коду?',
          'Ніндзя-програмісти минулого використовували деякі хитрощі, щоб загострити розум тих, хто буде підтримувати їх код.'
        ]
      }
    ]
  }]
})
