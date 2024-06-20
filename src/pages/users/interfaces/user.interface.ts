export interface User {
  id: string
  username: string | undefined
  password?: string
  email: string
  isActive?: boolean
  role?: Range
  range?: Range
}

export interface UserForm {
  id?:string
  username?: string
  password?: string
  email?: string
  isActive?: boolean
  role?:  number
  range?:  number
}

export interface Range {
  id: number
  name: string
}
