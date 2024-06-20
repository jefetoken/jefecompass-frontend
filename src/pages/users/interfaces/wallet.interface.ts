import { User } from './user.interface'

export interface Wallet {
  user:User
  address: string,
  jefev2: string,
  jefev3: string,
  op: string,
  bnb: string,
  eth: string,
}

export interface Blockchain {
  name: string
  balance: number
  transactions: number
}
