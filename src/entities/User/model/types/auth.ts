export interface Auth {
  id?: number
  name?: string
  age?: number
}

export interface UserSchema {
  auth?: Auth
}
