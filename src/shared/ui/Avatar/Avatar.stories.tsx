import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Avatar } from './Avatar'
import { ThemeDecorator } from 'shared/lib/storybook/decorators'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    alt: 'alt',
    src: 'https://cdn.sortiraparis.com/images/80/98390/1014564-avatar-le-dernier-maitre-de-l-air-la-serie-netflix-en-live-action-devoile-sa-bande-annonce-finale.jpg',
    onClick: fn(),
    onDoubleClick: fn(() => {
      alert('double')
    })
  }
} as Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
  args: {
    size: 50
  }
}
export const Middle: Story = {
  args: {
    size: 100
  }
}

export const Big: Story = {
  args: {
    size: 150
  }
}

export const MiddleLoading: Story = {
  args: {
    src: '',
    size: 100
  }
}
