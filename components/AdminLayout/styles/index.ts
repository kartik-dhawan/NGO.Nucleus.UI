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
      overflowX: "scroll",
    },
  },
  adminLayoutDrawerTitle: {
    display: "flex",
    alignItems: "center",
    gap: {
      xs: "8px",
      md: "16px",
    },
    margin: {
      xs: "0px 24px",
      md: "24px 24px 0px",
    },
    fontSize: {
      xs: "20px",
      md: "24px",
    },
    minWidth: "200px",
    width: "max-content",
    textDecoration: {
      xs: "underline",
      md: "none",
    },
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
      gap: "8px",
      padding: {
        xs: "8px 14px",
        md: "10px 16px",
      },
      "&:hover": {
        backgroundColor: "#ededed",
        borderRadius: "8px",
      },
      borderRadius: "8px",
    },
  },
  adminLayoutChildrenWrapper: {
    overflowY: "scroll",
    minHeight: {
      md: "720px",
    },
    padding: "2rem",
    boxSizing: "border-box",
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
