export interface HeaderTable {
  key: string
  label: string | number
  visible: boolean
}

export interface BodyTable {
  key: string
  value?: string | number
  values?: object[]
  type: string
}

export interface searchTable{
  value:string
}
