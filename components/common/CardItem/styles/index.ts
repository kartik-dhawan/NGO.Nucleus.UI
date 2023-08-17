export const styles = {
  ngoCardSkeletonBox: { height: "400px" },
  ngoCardWrapper: {
    minWidth: "300px",
    width: "100%",
    textDecoration: "none",
  },
  ngoCardMediaWrapper: {
    "& > img": {
      width: "100%",
      objectFit: "cover",
      height: {
        xs: "300px",
        sm: "400px",
        lg: "300px",
      },
    },
  },
  ngoCardTitle: {
    fontSize: "30px",
    display: "flex",
    gap: "8px",
    margin: "8px 0px",
    "& > a": {
      display: "flex",
      alignItems: "center",
    },
  },
  ngoCardDescription: {
    fontWeight: 300,
    fontSize: "18px",
    color: "#666",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: {
      md: 3,
    },
    WebkitBoxOrient: "vertical",
  },
  ngoCardReadMoreButton: {
    color: "#111",
    backgroundColor: "#FBEF4A",
    borderRadius: 0,
    fontSize: "16px",
    margin: "0px 8px 16px 8px",
  },
}
