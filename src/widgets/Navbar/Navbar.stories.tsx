import { type Meta, type StoryObj } from '@storybook/react'
import { Navbar } from 'widgets/Navbar/Navbar'
import { StoreDecorator, ThemeDecorator } from 'shared/lib/storybook/decorators'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'widgets/Navbar',
  component: Navbar
} as Meta <typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  decorators: [StoreDecorator({ user: { auth: {} } })]
}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark'), StoreDecorator({ user: { auth: {} } })]
}

export const UserIsAuth: Story = {
  decorators: [StoreDecorator({ user: { auth: { id: '111' } } })]
}
