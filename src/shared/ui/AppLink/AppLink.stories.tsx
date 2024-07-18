import { fn } from '@storybook/test'
import { type Meta, type StoryObj } from '@storybook/react'
import { AppLink } from './AppLink'
import { ThemeDecorator } from '../../../../config/storybook/decorators'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    onClick: fn(),
    onDoubleClick: fn(() => { alert('double') }),
    to: '#'
  }
} as Meta <typeof AppLink>

export default meta
// ---
type Story = StoryObj<typeof meta>

export const Content: Story = {
  args: {
    theme: 'content',
    children: 'Content'
  }
}

export const ContentDark: Story = {
  decorators: [ThemeDecorator('dark')],
  args: {
    theme: 'content',
    children: 'Content'
  }
}

export const ContentBorder: Story = {
  args: {
    theme: 'contentBorder',
    children: 'Content border'
  }
}

export const ContentBorderDark: Story = {
  decorators: [ThemeDecorator('dark')],
  args: {
    theme: 'contentBorder',
    children: 'Content border'
  }
}

export const Navigation: Story = {
  args: {
    theme: 'navigation',
    children: 'Navigation'
  }
}

export const NavigationDark: Story = {
  decorators: [ThemeDecorator('dark')],
  args: {
    theme: 'navigation',
    children: 'Navigation'
  }
}

export const NavigationBorder: Story = {
  args: {
    theme: 'navigationBorder',
    children: 'Navigation border'
  }
}

export const NavigationBorderDark: Story = {
  decorators: [ThemeDecorator('dark')],
  args: {
    theme: 'navigationBorder',
    children: 'Navigation border'
  }
}
