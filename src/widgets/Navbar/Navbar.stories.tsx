import { type Meta, type StoryObj } from '@storybook/react'
import { Navbar } from 'widgets/Navbar/Navbar'
import { ThemeDecorator } from 'shared/lib/StorybookDecorators/decorators'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  args: {
  }
} as Meta <typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')]
}
