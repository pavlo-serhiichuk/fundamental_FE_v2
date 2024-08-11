import { type Meta, type StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/lib/storybook/decorators'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Modal',
  component: Modal
} as Meta <typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  decorators: [ThemeDecorator('light')],
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci debitis ipsa ipsam quisquam. Animi dicta ipsam, modi quis similique suscipit temporibus.'
  }
}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')],
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci debitis ipsa ipsam quisquam. Animi dicta ipsam, modi quis similique suscipit temporibus.'
  }
}
