import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
  Button,
  Fade,
  CircularProgress,
} from "@mui/material"
import { useCallback, useState } from "react"
import { makePutRequest } from "../../../utils/methods"
import { API_END_POINTS } from "../../../utils/constants"

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
  const [statusEditLoader, setStatusEditLoader] = useState<boolean>(false)

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setStatusEditLoader(true)
      const res = {
        ...currentRow,
      }
      res[`${fkey}`] = event.target.value as string
      makePutRequest(`${API_END_POINTS.update_contact}/${currentRow.id}`, res)
        .then(() => {
          setState(event.target.value as string)
          setEditMenuToggle(false)
          setStatusEditLoader(false)
        })
        .catch((err) => {
          setStatusEditLoader(false)
          console.log(err)
        })
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
            justifyContent: "space-between",
          }}
        >
          <Box>
            {statusEditLoader ? (
              <CircularProgress
                sx={{
                  width: "24px !important",
                  height: "24px !important",
                }}
              />
            ) : (
              <Fade
                in={!statusEditLoader}
                timeout={{ appear: 500, enter: 1000, exit: 500 }}
              >
                <div>{state}</div>
              </Fade>
            )}
          </Box>
          <Button onClick={handleEditToggleClick}>Edit</Button>
        </Box>
      </Fade>
    </Box>
  )
}

export default CustomSelectMenu
