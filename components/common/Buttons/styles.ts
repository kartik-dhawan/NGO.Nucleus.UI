export const styles = {
  primaryButton: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#d9d9d9",
    backgroundColor: "#111",
    borderRadius: "10000px",
    padding: "8px 16px 8px 20px",
    margin: "12px 0px",
    textTransform: "capitalize",
    "& > svg": {
      transition: "550ms all ease",
      marginLeft: "12px",
    },
    "&:hover": {
      color: "#d9d9d9",
      backgroundColor: "#111",
      "& > svg": {
        transform: "translateX(12px)",
      },
    },
  },
}
