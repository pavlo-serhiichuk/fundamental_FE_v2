import { type SignInSchema } from 'features/SignIn'

export function getSignInInitialState (isWithValue: boolean = false): SignInSchema {
  return {
    username: isWithValue ? 'admin' : '',
    password: isWithValue ? '111' : ''
  }
}
