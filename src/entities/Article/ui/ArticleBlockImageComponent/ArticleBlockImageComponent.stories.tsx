import { type Meta, type StoryObj } from '@storybook/react'
import { ArticleBlockImageComponent } from './ArticleBlockImageComponent'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'place/ArticleBlockImageComponent',
  component: ArticleBlockImageComponent,
  decorators: []
} as Meta<typeof ArticleBlockImageComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
