import { ProfileCard } from './ProfileCard'
import { fn } from '@storybook/test'
import { type Meta, type StoryObj } from '@storybook/react'
import { StoreDecorator, ThemeDecorator } from 'shared/lib/storybook/decorators'
import { getProfileInitialState } from 'entities/Profile/model/slice/initialState'

const meta = {
  title: 'pages/ProfileCard',
  component: ProfileCard,
  args: {
    onClick: fn(),
    readonly: true
  },
  decorators: [StoreDecorator({ profile: getProfileInitialState(true) })]
} as Meta <typeof ProfileCard>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = { args: {} }

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')]
}

export const Editable: Story = {
  args: {
    readonly: false
  },
  decorators: StoreDecorator({ profile: getProfileInitialState(true) })
}
