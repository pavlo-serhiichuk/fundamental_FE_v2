import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Select } from './Select'
import { ThemeDecorator } from 'shared/lib/storybook/decorators'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Select',
  component: Select,
  args: {
    selectName: 'Select name',
    options: ['option 1', 'option 2', 'option 3'],
    onClick: fn(),
    onDoubleClick: fn(() => {
      alert('double')
    })
  }
} as Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')]
}
