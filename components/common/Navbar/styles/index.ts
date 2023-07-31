export const styles = {
  navbarWrapper: {
    display: "flex",
    margin: 0,
    padding: 0,
    borderBottom: "0.5px solid #999",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "#fff",
  },
  navbarAppTitleWrapper: {
    "& > img": {
      height: "40px",
      width: "40px",
    },
    display: "flex",
    alignItems: "center",
    gap: "4px",
    margin: {
      xs: "0px 8px",
      md: "0px 28px",
    },
    padding: "8px 0px",
  },
  navbarTitle: {
    width: "5rem",
    fontSize: {
      xs: "14px",
      md: "16px",
    },
  },
  navbarItemsWrapper: {
    display: {
      xs: "none",
      md: "flex",
    },
    padding: 0,
    width: "100%",
    "& > a:nth-of-type(5)": {
      marginLeft: "auto",
    },
    "& > a:last-child": {
      backgroundColor: "#fcef48",
    },
  },
  navbarItem: {
    width: "100%",
    padding: "8px 24px",
    "&:hover": {
      backgroundColor: "#fff898",
    },
    color: "#111",
    height: "100%",
    transition: "200ms all ease",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    "& > svg": {
      fontSize: "18px",
      margin: {
        xs: "0px 0px 0px auto",
        md: "0px 8px 0px 0px",
      },
    },
  },
  closeMenuButton: {
    textTransform: "capitalize",
    fontSize: "1rem",
    textDecoration: "underline",
    color: "#111",
  },
  mobileDonateButton: {
    backgroundColor: "#fcef48",
    "&:hover": {
      backgroundColor: "#fcef48",
    },
    display: {
      xs: "flex",
      md: "none",
    },
    width: "max-content",
    color: "#111",
    textDecoration: "none",
    padding: "0px 24px",
  },
  openMenuButton: {
    color: "#111",
    textTransform: "capitalize",
    fontWeight: 700,
    fontSize: "1rem",
    padding: "8px 24px",
    display: {
      xs: "flex",
      md: "none",
    },
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "#fff898",
    },
  },
}
