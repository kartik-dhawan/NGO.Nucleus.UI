import { Box, Divider, Drawer, Fade } from "@mui/material"
import Link from "next/link"
import { ReactNode } from "react"
import MoneyIcon from "@mui/icons-material/Money"
import ContactPhoneIcon from "@mui/icons-material/ContactPhone"
import BadgeIcon from "@mui/icons-material/Badge"
import { DrawerItem } from "../../utils/interfaces"
import { styles } from "./styles"
import { useRouter } from "next/router"

interface AdminLayoutProps {
  children: ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const router = useRouter()

  const drawerItems: DrawerItem[] = [
    {
      id: 11,
      label: "Profile",
      link: "/admin",
      icon: <BadgeIcon />,
    },
    {
      id: 12,
      label: "Donations",
      link: "/admin/donations",
      icon: <MoneyIcon />,
    },
    {
      id: 13,
      label: "Contacts",
      link: "/admin/contacts",
      icon: <ContactPhoneIcon />,
    },
  ]

  return (
    <Box component="main" sx={styles.adminLayoutWrapper}>
      <Drawer variant="permanent" sx={styles.adminLayoutDrawer}>
        <Box className="poppins" sx={styles.adminLayoutDrawerTitle}>
          Admin Dashboard
        </Box>
        <Divider variant="middle" sx={styles.adminLayoutDivider} />
        <Box sx={styles.adminLayoutDrawerSubhead}>Menu</Box>
        <Box sx={styles.adminLayoutDrawerItemsWrapper}>
          {drawerItems.map((item: DrawerItem) => {
            return (
              <Link
                key={item.id}
                href={item.link}
                className={`poppins adminLayoutDrawerItem ${
                  item.link === router.asPath && "selected"
                }`}
              >
                {item.icon}
                <Box>{item.label}</Box>
              </Link>
            )
          })}
        </Box>
      </Drawer>
      <Divider variant="middle" sx={styles.adminLayoutSecondaryDivider} />
      <Fade in={true} timeout={{ appear: 500, enter: 1000, exit: 500 }}>
        <Box sx={styles.adminLayoutChildrenWrapper}>{children}</Box>
      </Fade>
    </Box>
  )
}

export default AdminLayout
