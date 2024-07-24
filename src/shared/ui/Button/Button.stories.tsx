import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'
import { ThemeDecorator } from 'shared/lib/StorybookDecorators/decorators'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Button',
  component: Button,
  args: {
    onClick: fn(),
    onDoubleClick: fn(() => { alert('double') })
  }
} as Meta <typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Clear: Story = {
  args: {
    theme: 'clear',
    children: 'Clear'
  }
}

export const ClearDark: Story = {
  args: {
    theme: 'clear',
    children: 'Clear'
  },
  decorators: [ThemeDecorator('dark')]
}

export const Bordered: Story = {
  args: {
    theme: 'bordered',
    children: 'Bordered'
  }
}

export const BorderedDark: Story = {
  args: {
    theme: 'bordered',
    children: 'Bordered'
  },
  decorators: [ThemeDecorator('dark')]

}
