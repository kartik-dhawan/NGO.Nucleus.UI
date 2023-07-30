import { List, ListItem } from "@mui/material"
import { NavbarItem } from "../../../utils/interfaces"
import Link from "next/link"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { styles } from "./styles"
import { useSelector } from "react-redux"
import { RootType } from "../../../redux/store"

interface NavListProps {
  orientation: "desktop" | "mobile"
}

const NavList = ({ orientation }: NavListProps) => {
  const mobileListStyles = {
    ...styles.navbarItemsWrapper,
    display: {
      xs: "flex",
      md: "none",
    },
    flexDirection: "column",
    minWidth: {
      xs: "100vw",
      sm: "20rem",
    },
  }

  const { content } = useSelector((state: RootType) => state.contentSlice)

  return (
    <List
      sx={
        orientation === "desktop" ? styles.navbarItemsWrapper : mobileListStyles
      }
    >
      {content?.navbarItems?.map((item: NavbarItem) => {
        const desktopStyles = {
          ...styles.navbarItem,
          borderLeft: item.id < 4 ? "0.5px solid #222" : "none",
          borderRight: item.id > 4 ? "0.5px solid #222" : "none",
        }
        const mobileNavItemStyles = {
          ...styles.navbarItem,
          borderBottom: "0.5px solid #222",
          width: "100%",
          display: "flex",
          flexDirection: "row-reverse",
          padding: "16px",
        }
        return (
          <ListItem
            key={item.id}
            sx={orientation === "desktop" ? desktopStyles : mobileNavItemStyles}
          >
            {item.id === 4 && <LockOutlinedIcon />}
            <Link href={item.url}>{item.label}</Link>
          </ListItem>
        )
      })}
    </List>
  )
}

export default NavList
