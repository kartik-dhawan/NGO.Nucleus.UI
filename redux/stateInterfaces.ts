export type ContentfulVariable = { [key: string]: any }

export type ContentFulENV = "dev" | "master"

export interface ContentStateType {
  content: ContentfulVariable
  env: ContentFulENV
}

export interface AuthStateType {
  loginDialog: boolean
  menuList: boolean
}
