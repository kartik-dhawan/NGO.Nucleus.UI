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
          borderLeft: item.id < 4 ? "0.5px solid #c9c9c9" : "none",
          borderRight: item.id > 4 ? "0.5px solid #c9c9c9" : "none",
        }
        const mobileNavItemStyles = {
          ...styles.navbarItem,
          borderBottom: "0.5px solid #222",
          width: "100%",
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "flex-end",
          padding: "16px",
        }
        return (
          <Link
            href={item.url}
            key={item.id}
            style={{
              textDecoration: "none",
              width: orientation === "mobile" ? "100%" : "max-content",
            }}
          >
            <ListItem
              sx={
                orientation === "desktop" ? desktopStyles : mobileNavItemStyles
              }
            >
              {item.id === 4 && <LockOutlinedIcon />}
              {item.label}
            </ListItem>
          </Link>
        )
      })}
    </List>
  )
}

export default NavList
