import MainPage from './MainPage'
import { fn } from '@storybook/test'
import { type Meta, type StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/lib/StorybookDecorators/decorators'

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  args: {
    onClick: fn(),
    onDoubleClick: fn(() => { alert('double') })
  }
} as Meta <typeof MainPage>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = { args: {} }

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')]
}
