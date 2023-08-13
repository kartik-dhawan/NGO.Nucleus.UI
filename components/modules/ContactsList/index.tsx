import { useSelector } from "react-redux"
import TableStructure from "../../common/TableStructure"
import { RootType } from "../../../redux/store"
import { Box } from "@mui/material"
import { styles } from "./styles"
import {
  CONTACT_LIST_KEYS,
  CONTACT_STATUS_TYPES,
} from "../../../utils/constants"

const ContactsList = () => {
  const { contactsList } = useSelector((state: RootType) => state.contactSlice)

  return (
    <Box sx={styles.contactsSectionWrapper}>
      <TableStructure
        data={contactsList}
        keys={CONTACT_LIST_KEYS}
        selectMenuKeys={CONTACT_STATUS_TYPES}
      />
    </Box>
  )
}

export default ContactsList
