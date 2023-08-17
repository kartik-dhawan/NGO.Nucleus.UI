import { Box, Card, CardContent, CardMedia } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import { styles } from "./styles"
import { GenericCardItem } from "../../../utils/interfaces"

interface NgoCardProps {
  cardData: GenericCardItem
}

const CardItem = ({ cardData }: NgoCardProps) => {
  return (
    <Card sx={styles.ngoCardWrapper} className="robotoCondensed">
      <CardMedia sx={styles.ngoCardMediaWrapper}>
        <Image src={cardData.image} height={400} width={400} alt="" />
      </CardMedia>
      <CardContent>
        <Box sx={styles.ngoCardTitle}>
          {cardData.title}
          {cardData.url && (
            <Link href={cardData.url} target="_blank">
              <OpenInNewIcon />
            </Link>
          )}
        </Box>
        <Box sx={styles.ngoCardDescription}>{cardData.desc}</Box>
      </CardContent>
    </Card>
  )
}

export default CardItem
