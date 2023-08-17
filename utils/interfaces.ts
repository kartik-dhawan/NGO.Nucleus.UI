import { ReactNode } from "react"
import { ContentfulVariable, ContentFulENV } from "../redux/stateInterfaces"
import { Theme } from "@emotion/react"
import { SxProps } from "@mui/material"

// page level interfaces
export interface HomePageProps {
  content: ContentfulVariable
  environment: ContentFulENV
}

export interface AdminPageProps {
  content: ContentfulVariable
  environment: ContentFulENV
  contacts?: ContactFormData[]
}

export interface ChildrenType {
  children: ReactNode
}

export interface NgosPageProps {
  content: ContentfulVariable
  ngoList: any
}

// other interfaces
export interface CustomStyles {
  [key: string]: SxProps<Theme>
}

export interface NavbarItem {
  id: number
  label: string
  url: string
  authentication?: boolean
}

export interface ContactFormData {
  name: string
  email: string
  contactNumber: string
  ucid?: string
}

export interface DeveloperOrRefDetails {
  name: string
  link: string
}

export interface DevelopedByRole {
  id: number
  role: string
  dev: DeveloperOrRefDetails[]
}
export interface LoginFormData {
  email: string
  password: string
}

export interface DrawerItem {
  id: number
  label: string
  link: string
  icon: any
}

export interface UserContact {
  iat: number
  contactNumber: string
  email?: string
  name: string
}

export interface DataTableKeys {
  fk: string
  key: string
  id: number
}
