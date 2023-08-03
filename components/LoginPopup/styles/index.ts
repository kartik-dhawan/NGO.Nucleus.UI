export const styles = {
  loginDialog: {
    "& .MuiDialog-container": {
      "& .MuiPaper-root": {
        backgroundColor: "#f5fcfde8",
        maxWidth: {
          xs: "100%",
          sm: "60%",
          md: "40%",
          lg: "30%",
        },
        borderRadius: "0",
      },
    },
  },
  loginDialogTitle: {
    fontSize: "32px",
    margin: "20px",
    textAlign: "center",
    fontWeight: 300,
  },
  loginDialogContentWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  loginPopupTextField: {
    color: "#616161",
    fontWeight: 300,
    "& > div": {
      borderRadius: "0px",
    },
    margin: "8px",
    "& > label.Mui-focused": {
      color: "#616161",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ccc",
        border: "1px solid #ccc",
      },
      "&:hover fieldset": {
        border: "1px solid #ccc",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #ccc",
      },
    },
  },
  loginDialogActionLink: {
    textAlign: "center",
    "& > a": {
      fontSize: "18px",
      color: "#111",
    },
  },
  loginButton: {
    height: "100%",
    width: "100%",
    backgroundColor: "#111",
    color: "#d9d9d9",
    padding: "12px 24px",
    boxSizing: "border-box",
    fontSize: "24px",
    textTransform: "capitalize",
    borderRadius: 0,
    fontFamily: "Cormorant Garamond !important",
    "&:hover": {
      backgroundColor: "#111",
      color: "#f2f2f2",
    },
  },
}
