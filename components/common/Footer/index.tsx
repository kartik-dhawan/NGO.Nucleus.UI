import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import Image from "next/image"
import { useSelector } from "react-redux"
import { RootType } from "../../../redux/store"
import { styles } from "./styles"

const Footer = () => {
  const { content } = useSelector((state: RootType) => state.contentSlice)

  return (
    <Box component="footer" sx={styles.footerWrapper}>
      {content.footerBackgroundImage && (
        <Image
          src={"https:" + content?.footerBackgroundImage?.fields.file.url}
          alt={content?.footerBackgroundImage?.fields.description}
          width={5760}
          height={3840}
        />
      )}
      <Box sx={styles.footerDataWrapper}>
        <Box sx={styles.footerContactCardWrapper}>
          {content?.contactUsIllustration && (
            <Image
              src={"https:" + content?.contactUsIllustration?.fields.file.url}
              alt={content?.contactUsIllustration?.fields.description}
              height={400}
              width={400}
            />
          )}
          <Box className="poppins" sx={styles.footerContactBodyWrapper}>
            <Typography sx={styles.footerContactUsTitle}>Contact us</Typography>
            <Typography
              className="cormorant"
              sx={styles.footerContactUsSubheading}
            >
              Swiftly get a call & talk with the right people in our team to
              help.
            </Typography>
            <Grid
              container
              className="poppins"
              sx={{
                boxSizing: "border-box",
              }}
            >
              <Grid
                item
                md={5}
                sm={5}
                xs={12}
                sx={styles.contactUsFormNameField}
              >
                <TextField
                  sx={styles.formTextField}
                  variant="standard"
                  label="Name"
                />
              </Grid>
              <Grid item md={5} sm={5} xs={12}>
                <TextField
                  sx={styles.formTextField}
                  variant="standard"
                  label="Phone Number"
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <TextField
                  sx={styles.formTextField}
                  variant="standard"
                  label="Email"
                />
              </Grid>
              <Grid item xs={6}>
                <Button>Get a call</Button>
              </Grid>
            </Grid>
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
