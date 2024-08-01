import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User/model/types/user'

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
}
