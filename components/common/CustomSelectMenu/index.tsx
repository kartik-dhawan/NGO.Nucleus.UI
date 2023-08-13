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
import EditIcon from "@mui/icons-material/Edit"
import CancelIcon from "@mui/icons-material/Cancel"
import { styles } from "./styles"

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
    setEditMenuToggle((state) => !state)
  }, [])

  return (
    <Box sx={styles.customSelectEditMenuWrapper}>
      <Fade in={editMenuToggle}>
        <FormControl size="small" sx={styles.customSelectEditMenuFormWrapper}>
          <InputLabel sx={{ fontSize: "14px", textTransform: "capitalize" }}>
            {label}
          </InputLabel>
          <Select
            sx={{ fontSize: "14px" }}
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
        <Box sx={styles.customSelectEditMenuFieldValue}>
          {statusEditLoader ? (
            <CircularProgress sx={styles.customSelectEditMenuLoader} />
          ) : (
            <Fade
              in={!statusEditLoader}
              timeout={{ appear: 500, enter: 1000, exit: 500 }}
            >
              <div>{state}</div>
            </Fade>
          )}
        </Box>
      </Fade>
      <Button
        disableRipple
        sx={styles.customSelectEditMenuEditCancelBtn}
        onClick={handleEditToggleClick}
      >
        {editMenuToggle ? <CancelIcon /> : <EditIcon />}
      </Button>
    </Box>
  )
}

export default CustomSelectMenu
