import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { SignInForm } from './SignInForm'
import { ThemeDecorator } from 'shared/lib/StorybookDecorators/decorators'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'features/UserSignIn/SignInForm',
  component: SignInForm,
  args: {
    onClick: fn(),
    onDoubleClick: fn(() => { alert('double') })
  }
} as Meta <typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {}

export const PrimaryDark: Story = {
  decorators: ThemeDecorator('dark')
}
