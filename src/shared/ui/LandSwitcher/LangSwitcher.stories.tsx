import { fn } from '@storybook/test'
import { type Meta, type StoryObj } from '@storybook/react'
import { LangSwitcher } from 'shared/ui/LandSwitcher/LangSwitcher'

const meta = {
  title: 'shared/LangSwitcher',
  component: LangSwitcher,
  args: {
    onClick: fn(),
    onDoubleClick: fn(() => { alert('double') })
  }
} as Meta <typeof LangSwitcher>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {}
