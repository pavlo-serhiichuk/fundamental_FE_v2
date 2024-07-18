import { ThemeSwitcher } from './ThemeSwitcher'
import { fn } from '@storybook/test'
import { type Meta, type StoryObj } from '@storybook/react'

const meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  args: {
    onClick: fn(),
    onDoubleClick: fn(() => { alert('double') })
  }
} as Meta <typeof ThemeSwitcher>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {}
