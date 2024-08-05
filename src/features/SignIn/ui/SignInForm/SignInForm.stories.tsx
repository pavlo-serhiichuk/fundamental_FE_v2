import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { SignInForm } from './SignInForm'
import { StoreDecorator, ThemeDecorator } from 'shared/lib/StorybookDecorators/decorators'
import { initialState } from '../../state/slice/initialState'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const meta = {
  title: 'features/SignIn/SignInForm',
  component: SignInForm,
  args: {
    onClick: fn(),
    onDoubleClick: fn(() => { alert('double') })
  },
  decorators: [StoreDecorator(initialState)]
} as Meta <typeof SignInForm>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {}

export const PrimaryDark: Story = {
  decorators: ThemeDecorator('dark')
}

export const IsLoading: Story = {
  decorators: StoreDecorator({ signIn: { isLoading: true } })
}
