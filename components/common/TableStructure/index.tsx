import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { Dispatch, SetStateAction } from "react"

interface TableStructureProps {
  data: any[]
  keys: any[]
  handleSelectMenuChange?: (event: SelectChangeEvent) => void // eslint-disable-line
  selectMenuState?: any
  setSelectMenuState?: Dispatch<SetStateAction<string>>
}

const TableStructure = ({
  data,
  keys,
  handleSelectMenuChange,
  selectMenuState,
}: TableStructureProps) => {
  return (
    <Paper
      sx={{
        overflow: "hidden",
        width: "100%",
      }}
    >
      <TableContainer
        sx={{ pflexGrow: 1, maxHeight: "70vh", minHeight: "580px" }}
      >
        <Table stickyHeader>
          <TableHead
            sx={{
              "& th": {
                color: "#d9d9d9",
                backgroundColor: "#222",
              },
            }}
          >
            <TableRow className="he">
              {keys.map((item: any) => {
                return <TableCell key={item.id}>{item.key}</TableCell>
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any, index: number) => {
              return (
                <TableRow key={row.ucid} hover>
                  {keys.map((item: any) => {
                    const cellData = row[`${item.fk}`]
                    return (
                      <>
                        {item.fk === "status" && (
                          <TableCell>
                            <FormControl size="small">
                              <InputLabel sx={{ fontSize: "14px" }}>
                                Status
                              </InputLabel>
                              <Select
                                sx={{
                                  width: "180px",
                                  fontSize: "14px",
                                }}
                                value={selectMenuState}
                                label="Status"
                                onChange={handleSelectMenuChange}
                              >
                                <MenuItem sx={{ fontSize: "14px" }} value={1}>
                                  Contacted
                                </MenuItem>
                                <MenuItem sx={{ fontSize: "14px" }} value={2}>
                                  Recontact
                                </MenuItem>
                                <MenuItem sx={{ fontSize: "14px" }} value={3}>
                                  Invalid
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </TableCell>
                        )}
                        {item.fk === "sno" && (
                          <TableCell key={item.id}>{`#${index + 1}`}</TableCell>
                        )}
                        {item.fk !== "sno" && item.fk !== "status" && (
                          <TableCell key={item.id}>
                            {cellData === "" ? "-" : cellData}
                          </TableCell>
                        )}
                      </>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default TableStructure
