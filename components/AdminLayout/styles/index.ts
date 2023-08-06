export const styles = {
  adminLayoutWrapper: {
    position: "relative",
    display: "flex",
    margin: "2rem 0rem",
  },
  adminLayoutDrawer: {
    width: "max-content",
    flexShrink: 0,
    ["& .MuiDrawer-paper"]: {
      boxSizing: "border-box",
      height: "max-content",
      minHeight: "720px",
      position: "relative",
      zIndex: 0,
    },
  },
  adminLayoutDrawerTitle: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    margin: "24px 24px 0px",
    fontSize: "24px",
  },
  adminLayoutDrawerSubhead: {
    textTransform: "uppercase",
    margin: "12px 32px",
    fontSize: "14px",
    fontWeight: 500,
    color: "#555",
    letterSpacing: "1px",
  },
  adminLayoutDrawerItemsWrapper: {
    margin: "0px 32px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    position: "relative",
    "& > a": {
      color: "#222",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 16px",
      "&:hover": {
        backgroundColor: "#ededed",
        borderRadius: "8px",
      },
      borderRadius: "8px",
    },
  },
  adminLayoutChildrenWrapper: {
    overflowY: "scroll",
    height: "720px",
    padding: "2rem",
    boxSizing: "border-box",
  },
  // adminLayout
}
