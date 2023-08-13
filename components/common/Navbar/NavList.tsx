import { List, ListItem } from "@mui/material"
import { NavbarItem } from "../../../utils/interfaces"
import Link from "next/link"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { styles } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { RootType } from "../../../redux/store"
import { toggleLoginDialog } from "../../../redux/slices/authSlice"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { AUTHENTICATED_ADMIN_PAGES } from "../../../utils/constants"

interface NavListProps {
  orientation: "desktop" | "mobile"
  toggleMenu?: any
}

const NavList = ({ orientation, toggleMenu }: NavListProps) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { content } = useSelector((state: RootType) => state.contentSlice)

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true")
  }, [router])

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
            href={
              /**
               * on home page, if user is authenticated, the url will become '/admin'
               * on home page, if user is unauthenticated, the url will become '/#!'
               * on other pages, if user is authenticated, the url will become '/logout'
               */
              item.label === "Admin"
                ? AUTHENTICATED_ADMIN_PAGES.includes(router.asPath)
                  ? "/logout"
                  : isAuthenticated
                  ? "/admin"
                  : "#!"
                : item.url
            }
            key={item.id}
            style={{
              textDecoration: "none",
              width: orientation === "mobile" ? "100%" : "max-content",
            }}
            onClick={() => {
              item.label === "Admin" && // eslint-disable-line
                !isAuthenticated &&
                dispatch(toggleLoginDialog())
              toggleMenu && toggleMenu() // eslint-disable-line
            }}
          >
            <ListItem
              sx={
                orientation === "desktop" ? desktopStyles : mobileNavItemStyles
              }
            >
              {item.id === 4 && !isAuthenticated && <LockOutlinedIcon />}
              {item.label === "Admin" &&
              AUTHENTICATED_ADMIN_PAGES.includes(router.asPath)
                ? "Logout"
                : item.label}
            </ListItem>
          </Link>
        )
      })}
    </List>
  )
}

export default NavList
