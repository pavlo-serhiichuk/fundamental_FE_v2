import { NotFoundPage } from './NotFoundPage'
import { fn } from '@storybook/test'
import { type Meta, type StoryObj } from '@storybook/react'
import { ThemeDecorator } from '../../../../config/storybook/decorators'

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  args: {
    onClick: fn(),
    onDoubleClick: fn(() => { alert('double') })
  }
} as Meta <typeof NotFoundPage>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = { args: {} }

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')]
}
