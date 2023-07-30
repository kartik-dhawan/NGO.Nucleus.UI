import { CustomStyles } from "../../../../utils/interfaces"

export const styles: CustomStyles = {
  navbarWrapper: {
    display: "flex",
    margin: 0,
    padding: 0,
    borderBottom: "0.5px solid #222",
  },
  navbarAppTitleWrapper: {
    "& > img": {
      height: "40px",
      width: "40px",
    },
    display: "flex",
    alignItems: "center",
    gap: "4px",
    margin: "0px 32px",
    padding: "8px 0px",
  },
  navbarTitle: { width: "5rem" },
  navbarItemsWrapper: {
    display: {
      xs: "none",
      md: "flex",
    },
    padding: 0,
    width: "100%",
    "& > li:nth-of-type(5)": {
      marginLeft: "auto",
    },
    "& > li:last-child": {
      backgroundColor: "#fcef48",
    },
  },
  navbarItem: {
    width: "max-content",
    padding: "8px 24px",
    "&:hover": {
      color: "#555",
      backgroundColor: "#fff898",
    },
    "& > a": {
      color: "#111",
      textDecoration: "none",
      transition: "200ms all ease",
      fontWeight: 700,
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
    "& > svg": {
      fontSize: "18px",
      margin: "0px 8px 0px 0px",
    },
  },
}
