import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import SignInFormAsync from './SignInForm'
import { StoreDecorator, ThemeDecorator } from 'shared/lib/storybook/decorators'
import { getSignInInitialState } from '../../state/slice/getSignInInitialState'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const meta = {
  title: 'features/SignIn/SignInForm',
  component: SignInFormAsync,
  args: {
    onClick: fn(),
    onDoubleClick: fn(() => { alert('double') })
  },
  decorators: [StoreDecorator({ signIn: getSignInInitialState(true) })]
} as Meta <typeof SignInFormAsync>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: { isStory: true }
}

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator('dark')]
}

export const IsLoading: Story = {
  decorators: StoreDecorator({ signIn: { isLoading: true } })
}
