import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User/model/types/auth'
import { type SignInSchema } from 'features/SignIn'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  signIn: SignInSchema
}
