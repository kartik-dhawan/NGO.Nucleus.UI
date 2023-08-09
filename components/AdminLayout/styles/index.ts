export const styles = {
  adminLayoutWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    margin: "2rem 0rem",
    alignItems: {
      xs: "center",
      md: "inherit",
    },
  },
  adminLayoutDrawer: {
    width: "max-content",
    flexShrink: 0,
    ["& .MuiDrawer-paper"]: {
      boxSizing: "border-box",
      height: "max-content",
      minHeight: {
        md: "720px",
      },
      position: "relative",
      zIndex: 0,
      display: "flex",
      flexDirection: {
        xs: "row",
        md: "column",
      },
      width: {
        xs: "100vw",
        md: "max-content",
      },
      justifyContent: {
        xs: "center",
        md: "flex-start",
      },
      overflowX: "scroll",
    },
  },
  adminLayoutDrawerTitle: {
    display: {
      xs: "none",
      md: "flex",
    },
    alignItems: "center",
    gap: "16px",
    margin: "0px 24px",
    fontSize: "28px",
    minWidth: "200px",
    width: "max-content",
    justifyContent: "center",
    fontWeight: 500,
  },
  adminLayoutDrawerSubhead: {
    textTransform: "uppercase",
    margin: "12px 32px",
    fontSize: "14px",
    fontWeight: 500,
    color: "#555",
    letterSpacing: "1px",
    display: {
      xs: "none",
      md: "inline-block",
    },
  },
  adminLayoutDrawerItemsWrapper: {
    margin: {
      md: "0px 32px",
    },
    display: "flex",
    flexDirection: {
      md: "column",
    },
    gap: "8px",
    position: "relative",
    "& > a": {
      color: "#222",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: {
        xs: "6px",
        sm: "8px",
      },
      padding: {
        xs: "8px 12px",
        md: "10px 16px",
      },
      "&:hover": {
        backgroundColor: "#ededed",
        borderRadius: "8px",
      },
      borderRadius: "8px",
      fontSize: {
        xs: "14px",
        sm: "16px",
      },
    },
  },
  adminLayoutChildrenWrapper: {
    flexGrow: 1,
    overflowY: "scroll",
    minHeight: {
      md: "720px",
    },
    padding: "2rem",
    boxSizing: "border-box",
    position: "relative",
  },
  adminLayoutDivider: {
    margin: "16px",
    display: {
      xs: "none",
      md: "inherit",
    },
  },
  adminLayoutSecondaryDivider: {
    margin: "8px",
    width: "97vw",
    display: {
      md: "none",
    },
  },
}
