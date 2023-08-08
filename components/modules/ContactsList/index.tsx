import { useSelector } from "react-redux"
import TableStructure from "../../common/TableStructure"
import { RootType } from "../../../redux/store"
import { Box, CircularProgress } from "@mui/material"
import { DataTableKeys } from "../../../utils/interfaces"

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

  const contactStatusTypes = ["Contacted", "Recontact", "Unavailable"]

  return (
    <Box>
      {contactsList ? (
        <TableStructure
          data={contactsList}
          keys={contactListKeys}
          selectMenuKeys={contactStatusTypes}
        />
      ) : (
        <CircularProgress />
      )}
    </Box>
  )
}

export default ContactsList
