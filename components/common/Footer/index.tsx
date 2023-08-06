import { Box } from "@mui/material"
import Image from "next/image"
import { useSelector } from "react-redux"
import { RootType } from "../../../redux/store"
import { styles } from "./styles"
import ContactCard from "./ContactCard"
import References from "./References"
import { useRouter } from "next/router"

const Footer = () => {
  const { content } = useSelector((state: RootType) => state.contentSlice)
  const router = useRouter()

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
        {router.asPath !== "/admin" && <ContactCard content={content} />}
        {/* footer data */}
        <References content={content} />
      </Box>
    </Box>
  )
}

export default Footer
