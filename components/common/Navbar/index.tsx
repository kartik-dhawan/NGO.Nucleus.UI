import { Box, Button, Drawer, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { RootType } from "../../../redux/store"
import Image from "next/image"
import Link from "next/link"
import { styles } from "./styles"
import { useCallback, useState } from "react"
import NavList from "./NavList"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const { content } = useSelector((state: RootType) => state.contentSlice)
  const navbarListLength = (content && content.navbarItems?.length) ?? 4

  const toggleMenu = useCallback(() => {
    setOpenMenu((state) => !state)
  }, [])

  return (
    <Box className="robotoCondensed" component="nav" sx={styles.navbarWrapper}>
      <Box sx={styles.navbarAppTitleWrapper}>
        {content?.appIcon && (
          <Image
            src={content?.appIcon?.fields.file.url}
            alt={content?.appIcon?.fields.description}
            height={32}
            width={32}
          />
        )}
        <Typography sx={styles.navbarTitle}>{content.appTitle}</Typography>
      </Box>
      {/* below list only for desktop navbar */}
      <NavList orientation="desktop" />
      {/* below section for mobile navbar */}
      {/* Menu button only visible in portrait-tablets/mobiles */}
      <Button
        disableRipple
        className="robotoCondensed"
        onClick={toggleMenu}
        sx={styles.openMenuButton}
      >
        Menu
      </Button>

      {content.navbarItems && (
        <Link
          href={content.navbarItems[navbarListLength - 1].url}
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              ...styles.navbarItem,
              ...styles.mobileDonateButton,
            }}
          >
            {content.navbarItems[navbarListLength - 1].label}
          </Box>
        </Link>
      )}
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={toggleMenu}
        sx={{
          display: {
            md: "none",
          },
        }}
      >
        <NavList orientation="mobile" />
        <Button
          disableRipple
          onClick={toggleMenu}
          sx={styles.closeMenuButton}
          className="robotoCondensed"
        >
          Close
        </Button>
      </Drawer>
    </Box>
  )
}
export default Navbar
