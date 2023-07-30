import { Box, List, ListItem, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { RootType } from "../../../redux/store"
import Image from "next/image"
import { NavbarItem } from "../../../utils/interfaces"
import Link from "next/link"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { styles } from "./styles"

const Navbar = () => {
  const { content } = useSelector((state: RootType) => state.contentSlice)

  return (
    <Box className="navbarWrapper" component="nav" sx={styles.navbarWrapper}>
      <Box sx={styles.navbarAppTitleWrapper}>
        <Image
          src={content?.appIcon?.fields.file.url}
          alt={content?.appIcon?.fields.description}
          height={32}
          width={32}
        />
        <Typography sx={styles.navbarTitle}>{content.appTitle}</Typography>
      </Box>
      <List sx={styles.navbarItemsWrapper}>
        {content.navbarItems?.map((item: NavbarItem) => {
          return (
            <ListItem
              key={item.id}
              sx={{
                ...styles.navbarItem,
                borderLeft: item.id < 4 ? "0.5px solid #222" : "none",
                borderRight: item.id > 4 ? "0.5px solid #222" : "none",
              }}
            >
              {item.id === 4 && <LockOutlinedIcon />}
              <Link href={item.url}>{item.label}</Link>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}
export default Navbar
