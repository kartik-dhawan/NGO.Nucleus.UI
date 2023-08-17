import { Box, Skeleton } from "@mui/material"
import NgoCard from "./NgoCard"
import { styles } from "./styles"
import { useSelector } from "react-redux"
import { RootType } from "../../../redux/store"

const NgosList = () => {
  const { ngoList } = useSelector((state: RootType) => state.ngoSlice)

  return (
    <Box sx={styles.ngoListWrapper}>
      {ngoList ? (
        ngoList.map((item) => {
          return <NgoCard key={item.id} cardData={item} />
        })
      ) : (
        <>
          <Skeleton sx={styles.ngoCardSkeletonBox} />
          <Skeleton sx={styles.ngoCardSkeletonBox} />
          <Skeleton sx={styles.ngoCardSkeletonBox} />
        </>
      )}
    </Box>
  )
}

export default NgosList
