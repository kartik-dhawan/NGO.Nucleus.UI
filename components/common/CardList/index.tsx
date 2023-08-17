import { Box, Skeleton } from "@mui/material"
import CardItem from "../CardItem"
import { GenericCardItem } from "../../../utils/interfaces"

const CardList = ({ dataList }: { dataList: GenericCardItem[] }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
        },
        maxWidth: "100vw",
        gap: "4rem",
        margin: "2rem 0rem",
      }}
    >
      {dataList ? (
        dataList.map((item) => {
          return <CardItem key={item.id} cardData={item} />
        })
      ) : (
        <>
          <Skeleton sx={{ height: "400px" }} />
          <Skeleton sx={{ height: "400px" }} />
          <Skeleton sx={{ height: "400px" }} />
        </>
      )}
    </Box>
  )
}

export default CardList
