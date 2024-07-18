import { type Meta, type StoryObj } from '@storybook/react'
import { Loader } from './Loader'
import { ThemeDecorator } from '../../../../config/storybook/decorators'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Loader',
  component: Loader,
  args: {
  }
} as Meta <typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')]
}
