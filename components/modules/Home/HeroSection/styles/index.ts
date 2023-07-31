export const styles = {
  heroSectionWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: {
      xs: "2rem",
      md: "12rem",
    },
  },
  heroSectionItemWrapper: {
    display: "flex",
    gap: {
      sm: "2rem",
      lg: "10rem",
    },
    position: "relative",
  },
  heroSectionTypographyWrapper: {
    flex: 4,
    padding: "24px 32px",
    boxSizing: "border-box",
  },
  heroSectionTypography: {
    position: {
      md: "sticky",
    },
    top: "78px",
    "& > h1": {
      margin: "4px 0px",
      fontSize: {
        xs: "32px",
        xl: "38px",
      },
    },
    "& p": {
      fontSize: {
        xs: "18px",
        xl: "21px",
      },
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: {
        md: 5,
        lg: 7,
      },
      WebkitBoxOrient: "vertical",
    },
  },
  heroSectionImages: {
    flex: 6,
    "& > img": {
      width: "100%",
      height: {
        xs: "100vh",
        md: "100%",
      },
      objectFit: "cover",
      objectPosition: "50% 30%",
    },
  },
  heroLandingSectionButton: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#d9d9d9",
    backgroundColor: "#111",
    borderRadius: "10000px",
    padding: "12px 20px 12px 24px",
    margin: "12px 0px",
    textTransform: "capitalize",
    "& > svg": {
      transition: "550ms all ease",
      marginLeft: "12px",
    },
    "&:hover": {
      "& > svg": {
        transform: "translateX(12px)",
      },
    },
  },
}
