type UserRole = 'ADMIN' | 'USER'

export interface User {
  id?: string
  name?: string
  age?: number
  role?: UserRole
  avatar?: string
}

export interface UserSchema {
  auth?: User
  _isInit: boolean
}
