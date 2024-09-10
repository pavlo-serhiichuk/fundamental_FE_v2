import { type Meta, type StoryObj } from '@storybook/react'
import { Code } from './Code'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'place/Code',
  component: Code,
  decorators: []
} as Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
