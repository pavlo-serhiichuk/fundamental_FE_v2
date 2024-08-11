import { type Meta, type StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { ThemeDecorator } from 'shared/lib/storybook/decorators'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  args: {
  }
} as Meta <typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')]
}
