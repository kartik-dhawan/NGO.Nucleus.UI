import { Box } from "@mui/material"
import Image from "next/image"
import { useSelector } from "react-redux"
import { RootType } from "../../../redux/store"
import { styles } from "./styles"
import ContactCard from "./ContactCard"

const Footer = () => {
  const { content } = useSelector((state: RootType) => state.contentSlice)

  return (
    <Box component="footer" sx={styles.footerWrapper}>
      {content.footerBackgroundImage && (
        <Image
          src={"https:" + content?.footerBackgroundImage?.fields.file.url}
          alt={content?.footerBackgroundImage?.fields.description}
          width={5760}
          height={3840}
        />
      )}
      <Box sx={styles.footerDataWrapper}>
        {/* Contact us form */}
        <ContactCard content={content} />
        {/* footer data */}
        <Box sx={{ color: "#d9d9d9" }}>
          <Box sx={{ color: "#d9d9d9" }}>Hello</Box>
          <Box sx={{ color: "#d9d9d9" }}>Hello</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
