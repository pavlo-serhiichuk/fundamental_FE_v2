import { type Meta, type StoryObj } from '@storybook/react'
import { ArticleBlockTextComponent } from './ArticleBlockTextComponent'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'place/ArticleBlockTextComponent',
  component: ArticleBlockTextComponent,
  decorators: []
} as Meta<typeof ArticleBlockTextComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
