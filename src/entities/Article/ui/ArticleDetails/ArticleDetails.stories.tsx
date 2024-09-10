import { type Meta, type StoryObj } from '@storybook/react'
import { ArticleDetails } from './ArticleDetails'
import { StoreDecorator } from 'shared/lib/storybook/decorators'
import { getArticleMockState } from 'entities/Article/model/slice/articleState'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const mockData: any = getArticleMockState()

const meta = {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
  decorators: [StoreDecorator({ articleDetails: mockData })]
} as Meta<typeof ArticleDetails>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const IsLoading: Story = {
  decorators: [StoreDecorator({ articleDetails: { isLoading: true } })]
}

export const Error: Story = {
  decorators: [StoreDecorator({ articleDetails: { error: 'serverError' } })]
}
