import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import CustomSelectMenu from "../CustomSelectMenu"
import { styles } from "./styles"
import DonateButton from "../Buttons/DonateButton"

interface TableStructureProps {
  data: any[]
  keys: any[]
  selectMenuKeys?: string[]
  options?: { [key: string]: any }
}

const TableStructure = ({
  data,
  keys,
  selectMenuKeys,
}: TableStructureProps) => {
  return (
    <Paper sx={{ overflow: "hidden", width: "100%" }}>
      <TableContainer sx={styles.tableStructureWrapper}>
        <Table stickyHeader>
          <TableHead sx={styles.tableStructureHead}>
            <TableRow className="he">
              {keys.map((item: any) => {
                return (
                  <TableCell sx={styles.tableCellGenericStyles} key={item.id}>
                    {item.key}
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row: any, index: number) => {
              const extraKeys = ["sno", "status", "donate"]
              return (
                <TableRow key={row.ucid} hover>
                  {keys?.map((item: any) => {
                    const cellData = row[`${item.fk}`]
                    return (
                      <TableCell
                        key={item.id}
                        sx={styles.tableCellGenericStyles}
                      >
                        {item.fk === "status" && (
                          <CustomSelectMenu
                            fkey={item.fk}
                            label={item.key}
                            menuList={selectMenuKeys}
                            currentRow={row}
                          />
                        )}
                        {item.fk === "sno" && `#${index + 1}`}
                        {item.fk === "donate" && <DonateButton row={row} />}
                        {!extraKeys.includes(item.fk) &&
                          (cellData === "" ? "-" : cellData)}
                      </TableCell>
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
