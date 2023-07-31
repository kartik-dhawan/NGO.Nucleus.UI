import { Button } from "@mui/material"
import { styles } from "../../modules/Home/HeroSection/styles"
import { ReactNode } from "react"

interface PrimaryButtonProps {
  children: ReactNode
  icon?: ReactNode
}

const PrimaryButton = ({ children, icon }: PrimaryButtonProps) => {
  return (
    <Button disableRipple sx={styles.heroLandingSectionButton}>
      {children}
      {icon}
    </Button>
  )
}
export default PrimaryButton
