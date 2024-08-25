import { type Meta, type StoryObj } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { StoreDecorator, ThemeDecorator } from 'shared/lib/storybook/decorators'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  decorators: [StoreDecorator({})]
} as Meta <typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const PrimaryGreen: Story = {
  decorators: [ThemeDecorator('green')]
}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')]
}

export const UserAuth: Story = {
  decorators: [StoreDecorator({ user: { auth: { id: '111', age: 23, name: 'admin' } } })]
}
