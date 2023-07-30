import { ReactNode } from "react"
import { ContentfulVariable, ContentFulENV } from "../redux/stateInterfaces"
import { Theme } from "@emotion/react"
import { SxProps } from "@mui/material"

// page level interfaces
export interface HomePageProps {
  content: ContentfulVariable
  environment: ContentFulENV
}

export interface ChildrenType {
  children: ReactNode
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
