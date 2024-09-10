import { type Meta, type StoryObj } from '@storybook/react'
import ArticleDetailsPage from './ArticleDetailsPage'
import { StoreDecorator, ThemeDecorator } from 'shared/lib/storybook/decorators'
import { getArticleMockState } from 'entities/Article/model/slice/articleState'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const mockData: any = getArticleMockState()
const meta = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  decorators: [StoreDecorator({ articleDetails: mockData })]
} as Meta<typeof ArticleDetailsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Dark: Story = {
  decorators: ThemeDecorator('dark')
}
