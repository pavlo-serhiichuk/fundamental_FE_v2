import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Input } from './Input'
import { ThemeDecorator } from 'shared/lib/StorybookDecorators/decorators'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Input',
  component: Input,
  args: {
    onClick: fn(),
    onDoubleClick: fn(() => {
      alert('double')
    })
  }
} as Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    placeholder: 'placeholder...'
  }
}

export const WithValue: Story = {
  args: {
    value: 'value'
  }
}

export const WithLabel: Story = {
  args: {
    label: 'Label',
    placeholder: 'placeholder...'
  }
}

export const PrimaryDark: Story = {
  decorators: ThemeDecorator('dark'),
  args: {
    placeholder: 'placeholder...'
  }
}

export const WithValueDark: Story = {
  decorators: ThemeDecorator('dark'),
  args: {
    value: 'value'
  }
}

export const WithLabelDark: Story = {
  decorators: ThemeDecorator('dark'),
  args: {
    label: 'Label',
    placeholder: 'placeholder...'
  }
}
