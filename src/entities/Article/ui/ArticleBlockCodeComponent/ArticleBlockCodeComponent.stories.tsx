import { type Meta, type StoryObj } from '@storybook/react'
import { ArticleBlockCodeComponent } from './ArticleBlockCodeComponent'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'place/ArticleBlockCodeComponent',
  component: ArticleBlockCodeComponent,
  decorators: []
} as Meta<typeof ArticleBlockCodeComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
