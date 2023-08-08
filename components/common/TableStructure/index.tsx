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

interface TableStructureProps {
  data: any[]
  keys: any[]
  selectMenuKeys?: string[]
}

const TableStructure = ({
  data,
  keys,
  selectMenuKeys,
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
                      <TableCell key={item.id}>
                        {item.fk === "status" && (
                          <CustomSelectMenu
                            fkey={item.fk}
                            label={cellData}
                            menuList={selectMenuKeys}
                            currentRow={row}
                          />
                        )}
                        {item.fk === "sno" && `#${index + 1}`}
                        {item.fk !== "sno" &&
                          item.fk !== "status" &&
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
