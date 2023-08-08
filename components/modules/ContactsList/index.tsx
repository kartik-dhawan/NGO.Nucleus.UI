import { useSelector } from "react-redux"
import TableStructure from "../../common/TableStructure"
import { RootType } from "../../../redux/store"
import { Box, CircularProgress, SelectChangeEvent } from "@mui/material"
import { DataTableKeys } from "../../../utils/interfaces"
import { useState } from "react"

const ContactsList = () => {
  const { contactsList } = useSelector((state: RootType) => state.contactSlice)
  const contactListKeys: DataTableKeys[] = [
    {
      fk: "sno",
      key: "",
      id: 0,
    },
    {
      fk: "name",
      key: "Name",
      id: 1,
    },
    {
      fk: "email",
      key: "Email",
      id: 2,
    },
    {
      fk: "contactNumber",
      key: "Contact Number",
      id: 3,
    },
    {
      fk: "iat",
      key: "Date Entered",
      id: 4,
    },
    {
      fk: "status",
      key: "Status",
      id: 5,
    },
  ]

  const [status, setStatus] = useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string)
  }

  return (
    <Box>
      {contactsList ? (
        <TableStructure
          data={contactsList}
          keys={contactListKeys}
          handleSelectMenuChange={handleChange}
          selectMenuState={status}
        />
      ) : (
        <CircularProgress />
      )}
    </Box>
  )
}

export default ContactsList
