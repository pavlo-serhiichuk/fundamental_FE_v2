import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Skeleton } from './Skeleton'
import { ThemeDecorator } from 'shared/lib/storybook/decorators'

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  args: {
    onClick: fn(),
    onDoubleClick: fn(() => { alert('double') })
  }
} as Meta <typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    width: 400,
    height: 100
  }
}

export const PrimaryDark: Story = {
  args: {
    width: 400,
    height: 100
  },
  decorators: [ThemeDecorator('dark')]
}

export const PrimaryGreen: Story = {
  args: {
    width: 400,
    height: 100
  },
  decorators: [ThemeDecorator('green')]
}
