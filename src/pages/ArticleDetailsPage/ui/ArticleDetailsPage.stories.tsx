import { type Meta, type StoryObj } from '@storybook/react'
import ArticleDetailsPage from './ArticleDetailsPage'
import { PageContentDecorator, StoreDecorator } from 'shared/lib/storybook/decorators'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  decorators: [PageContentDecorator, StoreDecorator({ articleDetails: { } })]
} as Meta<typeof ArticleDetailsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
