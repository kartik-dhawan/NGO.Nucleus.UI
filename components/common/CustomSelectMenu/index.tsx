import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
  Button,
  Fade,
} from "@mui/material"
import { useCallback, useState } from "react"

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
  const [state, setState] = useState(currentRow[`${fkey}`])
  const [editMenuToggle, setEditMenuToggle] = useState<boolean>(false)

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      console.log(currentRow)
      setState(event.target.value as string)
      const res = {
        ...currentRow,
      }
      res[`${fkey}`] = event.target.value as string
      console.log(res)
      setEditMenuToggle(false)
    },
    [currentRow],
  )

  const handleClick = useCallback(() => {
    setEditMenuToggle(false)
  }, [])

  const handleEditToggleClick = useCallback(() => {
    setEditMenuToggle(true)
  }, [])

  return (
    <Box sx={{ position: "relative" }}>
      <Fade in={editMenuToggle}>
        <FormControl size="small" sx={{ position: "absolute" }}>
          <InputLabel sx={{ fontSize: "14px" }}>{label}</InputLabel>
          <Select
            sx={{
              width: "180px",
              fontSize: "14px",
            }}
            value={state}
            label={label}
            onClick={handleClick}
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
      </Fade>
      <Fade in={!editMenuToggle}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "180px",
          }}
        >
          <Box>{state}</Box>
          <Button onClick={handleEditToggleClick}>Edit</Button>
        </Box>
      </Fade>
    </Box>
  )
}

export default CustomSelectMenu
