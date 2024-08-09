import { type FC, lazy } from 'react'
import { type SignInFormProps } from 'features/SignIn/ui/SignInForm/SignInForm'

export const SignInFormAsync = lazy<FC<SignInFormProps>>(() => new Promise((resolve: any) =>
  setTimeout(() => resolve(import('./SignInForm')), 1400))
)
