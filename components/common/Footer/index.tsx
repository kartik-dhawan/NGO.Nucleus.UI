import { Box, Button, FormControl, TextField, Typography } from "@mui/material"
import Image from "next/image"
import { useSelector } from "react-redux"
import { RootType } from "../../../redux/store"

const Footer = () => {
  const { content } = useSelector((state: RootType) => state.contentSlice)

  return (
    <Box
      component="footer"
      sx={{
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
      }}
    >
      {content.footerBackgroundImage && (
        <Image
          src={"https:" + content?.footerBackgroundImage?.fields.file.url}
          alt={content?.footerBackgroundImage?.fields.description}
          width={5760}
          height={3840}
        />
      )}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          background:
            "linear-gradient(90deg, rgba( 0, 0, 0, 0.25 ), rgba( 0, 0, 0, 0 ))",
          boxShadow: " 0 8px 8px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 7px )",
          WebkitBackdropFilter: "blur( 7px )",
          minHeight: "720px",
          padding: "2rem",
        }}
      >
        <Box
          sx={{
            "& > img": {
              flex: 1,
              display: {
                xs: "none",
                md: "inherit",
              },
            },
            backgroundColor: "#F1EFE9",
            display: "flex",
            borderRadius: "1rem",
            alignItems: "center",
          }}
        >
          {content?.contactUsIllustration && (
            <Image
              src={"https:" + content?.contactUsIllustration?.fields.file.url}
              alt={content?.contactUsIllustration?.fields.description}
              height={500}
              width={500}
            />
          )}
          <Box
            className="poppins"
            sx={{
              color: "#111",
              flex: 1,
              display: "flex",
              gap: "2rem",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
                color: "#656565",
              }}
            >
              Contact us
            </Typography>
            <Typography className="cormorant" sx={{ fontSize: "32px" }}>
              Swiftly get a call and communicate with the right people in our
              team to help make a difference.
            </Typography>
            <FormControl
              fullWidth
              size="small"
              className="poppins"
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                width: "100%",
                paddingRight: "3rem",
                boxSizing: "border-box",
                gap: "8px",
              }}
            >
              <TextField
                sx={{
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
                }}
                variant="standard"
                label="Name"
              />
              <TextField
                sx={{
                  "& > div::after": {
                    borderBottom: "1px solid #8b8b8b",
                  },
                  "& > div::before": {
                    borderBottom: "1px solid #ccc",
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
                }}
                variant="standard"
                label="Email"
              />
              <TextField
                sx={{
                  "& > div::after": {
                    borderBottom: "1px solid #8b8b8b",
                  },
                  "& > div::before": {
                    borderBottom: "1px solid #ccc",
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
                }}
                variant="standard"
                label="Phone Number"
              />
              <Button>Get a call</Button>
            </FormControl>
            {/* <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText> */}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
