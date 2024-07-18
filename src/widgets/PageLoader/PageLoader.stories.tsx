import { type Meta, type StoryObj } from '@storybook/react'
import { PageLoader } from './PageLoader'
import { ThemeDecorator } from '../../../config/storybook/decorators'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'widgets/PageLoader',
  component: PageLoader,
  args: {
  }
} as Meta <typeof PageLoader>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')]
}