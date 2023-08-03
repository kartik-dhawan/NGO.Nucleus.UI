export const styles = {
  footerWrapper: {
    position: "relative",
    minHeight: "720px",
    marginTop: "6rem",
    "& > img": {
      position: "absolute",
      top: 0,
      objectFit: "cover",
      height: "100%",
      width: "100vw",
    },
  },
  footerDataWrapper: {
    position: "relative",
    zIndex: 10,
    background:
      "linear-gradient(90deg, rgba( 0, 0, 0, 0.25 ), rgba( 0, 0, 0, 0 ))",
    boxShadow: " 0 8px 8px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 7px )",
    WebkitBackdropFilter: "blur( 7px )",
    minHeight: "720px",
    padding: "0rem 2rem 2rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  footerContactCardWrapper: {
    position: "relative",
    "& > img": {
      flex: 1,
      display: {
        xs: "none",
        md: "inherit",
      },
      height: {
        xs: "300px",
        lg: "450px",
      },
      width: {
        xs: "300px",
        lg: "450px",
      },
      objectFit: {
        xs: "cover",
        xl: "contain",
      },
      objectPosition: "0% 80%",
    },
    backgroundColor: "#F1EFE9",
    display: "flex",
    alignItems: "center",
    padding: {
      xs: "1rem 0rem",
      md: "2rem 0rem",
      lg: "2.5rem 0rem",
      xl: "0rem",
    },
    maxWidth: "1280px",
  },
  footerContactBodyWrapper: {
    color: "#111",
    flex: 1,
    display: "flex",
    gap: {
      xs: "1rem",
      md: "1rem",
      lg: "2rem",
    },
    flexDirection: "column",
    padding: {
      xs: "1rem 2rem",
      sm: "2rem 3rem",
      md: "0 3rem",
    },
  },
  footerContactUsTitle: {
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    color: "#656565",
  },
  footerContactUsSubheading: {
    fontSize: {
      xs: "24px",
      sm: "28px",
      lg: "32px",
    },
    lineHeight: {
      xs: "44px",
      lg: "48px",
    },
    fontWeight: 500,
    paddingRight: "3rem",
    margin: {
      xs: "0rem -2rem 0rem 0rem",
      sm: 0,
    },
  },
  contactUsFormNameField: {
    marginRight: {
      xs: 0,
      sm: "4rem",
      md: "3rem",
    },
  },
  formTextField: {
    width: "100%",
    "& > div::before": {
      borderBottom: "1px solid #ccc",
    },
    "& > div::after": {
      borderBottom: "1px solid #8b8b8b",
    },
    "& > div:hover:not(.Mui-disabled, .Mui-error):before": {
      borderBottom: "1px solid #8b8b8b",
    },
    "& > div input": {
      fontSize: "14px",
      padding: "8px 0px",
    },
    "& > label": {
      fontSize: "14px",
    },
    "& > label.Mui-focused": {
      color: "#751d1d",
    },
  },
  contactFormHelperText: {
    position: "absolute",
    bottom: "20px",
    right: {
      xs: "50%",
      sm: "24px",
    },
    transform: {
      xs: "translateX(50%)",
      sm: "none",
    },
    width: "max-content",
  },
}
