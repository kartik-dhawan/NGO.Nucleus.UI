import { Box } from "@mui/material"

interface NgoCardProps {
  cardData: any
}

const NgoCard = ({ cardData }: NgoCardProps) => {
  return (
    <Box
      sx={{
        border: "1px solid blue",
        minWidth: "300px",
        width: "100%",
      }}
    >
      <pre>{cardData.name}</pre>
    </Box>
  )
}

export default NgoCard
