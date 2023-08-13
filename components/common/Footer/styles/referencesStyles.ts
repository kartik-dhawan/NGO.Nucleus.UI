export const styles = {
  referencesWrapper: {
    display: "flex",
    flexDirection: {
      xs: "column-reverse",
      md: "row",
    },
    width: "100%",
    maxWidth: "1280px",
    color: "#d9d9d9",
    padding: "4rem 1rem",
    boxSizing: "border-box",
    "& > div": {
      flex: 1,
    },
    gap: {
      xs: "4rem",
      md: 0,
    },
  },
  referencesExploreMoreSection: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    "& > a": {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: {
        xs: "14px",
        xl: "16px",
      },
      fontWeight: 200,
      color: "#c2bc74",
      textDecoration: "none",
      "&:hover": {
        color: "#fff",
      },
      "& > svg": {
        fontSize: "14px",
        color: "#111",
        backgroundColor: "#d9d9d9",
        padding: "2px",
        borderRadius: "50%",
      },
    },
  },
  referencesMoreInfoTitle: {
    fontSize: {
      xs: "18px",
      xl: "20px",
    },
    color: "#d9d9d9",
    fontWeight: 200,
    letterSpacing: "1px",
  },
  developerReferencesWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  developerReferencesRole: {
    fontSize: {
      xs: "17px",
      xl: "19px",
    },
    color: "#c2bc74",
    fontWeight: 300,
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  developerRolesDivider: {
    color: "#ccc",
    width: {
      xs: "100%",
      md: "70%",
    },
    height: "0.1px",
    backgroundColor: "#ccc",
    opacity: 0.3,
    margin: "8px 0px",
  },
  referencesDeveloperDetail: {
    "& > a": {
      color: "#ccc",
      textDecoration: "none",
      fontWeight: 200,
      fontSize: {
        xs: "15px",
        xl: "17px",
      },
      "&:hover": {
        color: "#d9d9d9",
      },
    },
  },
}
