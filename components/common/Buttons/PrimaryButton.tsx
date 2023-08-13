import { Button } from "@mui/material"
import { MouseEventHandler, ReactNode } from "react"
import { styles } from "./styles"

interface PrimaryButtonProps {
  children: ReactNode
  icon?: ReactNode
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const PrimaryButton = ({
  children,
  icon,
  disabled,
  onClick,
}: PrimaryButtonProps) => {
  return (
    <Button
      disableRipple
      sx={styles.primaryButton}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      {icon}
    </Button>
  )
}
export default PrimaryButton
