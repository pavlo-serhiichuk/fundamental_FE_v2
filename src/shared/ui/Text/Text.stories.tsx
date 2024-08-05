import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Text } from './Text'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Text',
  component: Text,
  args: {
    onClick: fn()
  }
} as Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const TitleText: Story = {
  args: {
    title: 'This is a title',
    text: 'This is text with information'
  }
}

export const TitleOnly: Story = {
  args: {
    title: 'This is a title'
  }
}

export const TextOnly: Story = {
  args: {
    text: 'This is text with information'
  }
}

export const TitleTextError: Story = {
  args: {
    title: 'This is a title',
    text: 'This is text with information',
    theme: 'error'
  }
}

export const TitleTextWarn: Story = {
  args: {
    title: 'This is a title',
    text: 'This is text with information',
    theme: 'warn'
  }
}
