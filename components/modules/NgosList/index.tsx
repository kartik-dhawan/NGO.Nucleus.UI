import { Box } from "@mui/material"
import NgoCard from "./NgoCard"
import { styles } from "./styles"

interface NgosListProps {
  ngosData: any[] // eslint-disable-line
}

const NgosList = ({ ngosData }: NgosListProps) => {
  return (
    <Box sx={styles.ngoListWrapper}>
      {ngosData.map((item) => {
        return <NgoCard key={item.id} cardData={item} />
      })}
    </Box>
  )
}

export default NgosList
