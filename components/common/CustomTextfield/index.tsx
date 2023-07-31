import { TextField } from "@mui/material"
import { styles } from "./styles"
import { ChangeEventHandler } from "react"

interface CustomTextFieldProps {
  label: string
  onChange?:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined
  value?: string
}

const CustomTextField = ({ label, onChange, value }: CustomTextFieldProps) => {
  return (
    <TextField
      sx={styles.formTextField}
      variant="standard"
      label={label}
      value={value}
      onChange={onChange}
    />
  )
}
export default CustomTextField
