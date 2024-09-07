export interface Auth {
  id?: string
  name?: string
  age?: number
}

export interface UserSchema {
  auth?: Auth
  _isInit: boolean
}
