import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material"
import { useState } from "react"

interface CustomSelectMenuProps {
  label: string
  menuList?: string[] | number[]
  currentRow: any
  fkey: string
}

const CustomSelectMenu = ({
  fkey,
  label,
  menuList = [],
  currentRow,
}: CustomSelectMenuProps) => {
  const [state, setState] = useState("")

  const handleChange = (event: SelectChangeEvent) => {
    console.log(currentRow)
    setState(event.target.value as string)
    const res = {
      ...currentRow,
    }
    res[`${fkey}`] = event.target.value as string
    console.log(res)
  }

  return (
    <FormControl size="small">
      <InputLabel sx={{ fontSize: "14px" }}>{label}</InputLabel>
      <Select
        sx={{
          width: "180px",
          fontSize: "14px",
        }}
        value={state}
        label={label}
        onChange={handleChange}
        defaultValue={currentRow[`${fkey}`]}
        defaultChecked={currentRow[`${fkey}`]}
      >
        {menuList.map((item, index: number) => {
          return (
            <MenuItem
              sx={{ fontSize: "14px" }}
              value={item}
              key={`${item}_${index}`}
            >
              {item}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default CustomSelectMenu
