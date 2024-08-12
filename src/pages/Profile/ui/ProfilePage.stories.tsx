import ProfilePage from './ProfilePage'
import { fn } from '@storybook/test'
import { type Meta, type StoryObj } from '@storybook/react'
import { StoreDecorator, ThemeDecorator } from 'shared/lib/storybook/decorators'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  args: {
    onClick: fn(),
    onDoubleClick: fn(() => { alert('double') })
  },
  decorators: [StoreDecorator({})]
} as Meta <typeof ProfilePage>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = { args: {} }

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')]
}
