import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { SignInModal } from './SignInModal'
import { StoreDecorator, ThemeDecorator } from 'shared/lib/StorybookDecorators/decorators'
import { getSignInInitialState } from 'features/SignIn/state/slice/getSignInInitialState'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'features/SignIn/SignInModal',
  component: SignInModal,
  args: {
    onClick: fn(),
    onDoubleClick: fn(() => { alert('double') })
  },
  decorators: [StoreDecorator({ signIn: getSignInInitialState(true) })]
} as Meta <typeof SignInModal>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    isOpen: true
  }
}

export const PrimaryDark: Story = {
  decorators: ThemeDecorator('dark'),
  args: {
    isOpen: true
  }
}
