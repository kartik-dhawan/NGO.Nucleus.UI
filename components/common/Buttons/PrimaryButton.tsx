import { Button } from "@mui/material"
import { ReactNode } from "react"
import { styles } from "./styles"

interface PrimaryButtonProps {
  children: ReactNode
  icon?: ReactNode
}

const PrimaryButton = ({ children, icon }: PrimaryButtonProps) => {
  return (
    <Button disableRipple sx={styles.primaryButton}>
      {children}
      {icon}
    </Button>
  )
}
export default PrimaryButton
