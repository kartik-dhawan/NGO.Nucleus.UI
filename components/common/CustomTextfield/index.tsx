import { TextField } from "@mui/material"
import { styles } from "./styles"
import { ChangeEventHandler } from "react"

interface CustomTextFieldProps {
  label: string
  onChange?:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined
  value?: string
  type?: string
  helperText?: string
  required?: boolean
}

const CustomTextField = ({
  label,
  onChange,
  value,
  type,
  helperText,
  required,
}: CustomTextFieldProps) => {
  return (
    <TextField
      type={type}
      sx={styles.formTextField}
      variant="standard"
      label={label}
      value={value}
      onChange={onChange}
      helperText={helperText}
      required={required}
    />
  )
}
export default CustomTextField
