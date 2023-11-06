import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import { styles } from "./styles"
import { GenericCardItem } from "../../../utils/interfaces"
import { useRouter } from "next/router"

interface NgoCardProps {
  cardData: GenericCardItem
}

const CardItem = ({ cardData }: NgoCardProps) => {
  const router = useRouter()
  // const url = router.asPath === "/ngos" ? `/ngo/${cardData.id}` : cardData.url
  const url = cardData.url

  return (
    <Card sx={styles.ngoCardWrapper} className="robotoCondensed">
      <CardMedia sx={styles.ngoCardMediaWrapper}>
        <Image src={cardData.image} height={400} width={400} alt="" />
      </CardMedia>
      <CardContent>
        <Box sx={styles.ngoCardTitle}>
          {cardData.title}
          {router.asPath === "/ngos" && cardData.url && (
            <Link href={cardData.url} target="_blank">
              <OpenInNewIcon />
            </Link>
          )}
        </Box>
        <Box sx={styles.ngoCardDescription}>{cardData.desc}</Box>
      </CardContent>
      <CardActions sx={{ paddingBottom: 0 }}>
        <Button
          className="robotoCondensed"
          sx={styles.ngoCardReadMoreButton}
          onClick={() => {
            window.open(url, "_blank")
          }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardItem
