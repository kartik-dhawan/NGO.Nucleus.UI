import { Box, FormHelperText, Grid, Typography } from "@mui/material"
import Image from "next/image"
import { useSelector } from "react-redux"
import { RootType } from "../../../redux/store"
import { styles } from "./styles"
import PrimaryButton from "../Buttons/PrimaryButton"
import CustomTextField from "../CustomTextfield"
import { useState } from "react"
import { ContactFormData } from "../../../utils/interfaces"

const initialState: ContactFormData = {
  name: "",
  email: "",
  contactNumber: "",
}

const Footer = () => {
  const [contactFormData, setContactFormData] =
    useState<ContactFormData>(initialState)

  console.log(contactFormData)

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
            <Box
              component="p"
              className="cormorant"
              sx={styles.footerContactUsSubheading}
            >
              Swiftly get a call & talk with the right people in our team to
              help.
            </Box>
            <Grid
              container
              className="poppins"
              sx={{
                boxSizing: "border-box",
                gap: "8px",
              }}
            >
              <Grid
                item
                md={5}
                sm={5}
                xs={12}
                sx={styles.contactUsFormNameField}
              >
                <CustomTextField
                  label="Name"
                  value={contactFormData.name}
                  onChange={(e: any) => {
                    setContactFormData({
                      ...contactFormData,
                      name: e.target.value,
                    })
                  }}
                />
              </Grid>
              <Grid item md={5} sm={5} xs={12}>
                <CustomTextField
                  label="Contact Number"
                  value={contactFormData.contactNumber}
                  onChange={(e: any) => {
                    setContactFormData({
                      ...contactFormData,
                      contactNumber: e.target.value,
                    })
                  }}
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <CustomTextField
                  label="Email"
                  value={contactFormData.email}
                  onChange={(e: any) => {
                    setContactFormData({
                      ...contactFormData,
                      email: e.target.value,
                    })
                  }}
                />
              </Grid>
              <Grid item xs={6} marginTop={2}>
                <PrimaryButton>Get a call!!</PrimaryButton>
              </Grid>
            </Grid>
            <FormHelperText
              sx={{ position: "absolute", bottom: "20px", right: "24px" }}
            >
              We&lsquo;ll never share your email or contact number.
            </FormHelperText>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
