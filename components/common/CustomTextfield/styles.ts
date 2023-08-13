export const styles = {
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
}
