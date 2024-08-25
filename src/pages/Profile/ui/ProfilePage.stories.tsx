import ProfilePage from './ProfilePage'
import { fn } from '@storybook/test'
import { type Meta, type StoryObj } from '@storybook/react'
import { StoreDecorator, ThemeDecorator } from 'shared/lib/storybook/decorators'
import { profileMockState } from 'entities/Profile/model/slice/profileState'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  args: {
    onClick: fn(),
    onDoubleClick: fn(() => { alert('double') })
  },
  decorators: [StoreDecorator({ profile: { readonly: true } })]
} as Meta <typeof ProfilePage>

export default meta

type Story = StoryObj<typeof meta>

export const Empty: Story = { args: {} }

export const EmptyDark: Story = {
  decorators: [ThemeDecorator('dark')]
}

export const WithData: Story = { args: {}, decorators: StoreDecorator({ profile: profileMockState }) }
