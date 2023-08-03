import { Box, Typography, Grid, FormHelperText } from "@mui/material"
import PrimaryButton from "../Buttons/PrimaryButton"
import CustomTextField from "../CustomTextfield"
import Image from "next/image"
import { useState } from "react"
import { ContactFormData } from "../../../utils/interfaces"
import { ContentfulVariable } from "../../../redux/stateInterfaces"
import { styles } from "./styles"

const initialState: ContactFormData = {
  name: "",
  email: "",
  contactNumber: "",
}

interface ContactCardProps {
  content: ContentfulVariable
}

const ContactCard = ({ content }: ContactCardProps) => {
  const [contactFormData, setContactFormData] =
    useState<ContactFormData>(initialState)

  return (
    <Box component="section" sx={styles.footerContactCardWrapper}>
      {content?.contactUsIllustration && (
        <Image
          src={"https:" + content?.contactUsIllustration?.fields.file.url}
          alt={content?.contactUsIllustration?.fields.description}
          height={400}
          width={400}
          priority
        />
      )}
      <Box className="poppins" sx={styles.footerContactBodyWrapper}>
        <Typography sx={styles.footerContactUsTitle}>Contact us</Typography>
        <Box
          component="p"
          className="cormorant"
          sx={styles.footerContactUsSubheading}
        >
          Swiftly get a call & talk with the right people in our team to help.
        </Box>
        <Grid
          container
          className="poppins"
          sx={{
            boxSizing: "border-box",
            gap: "8px",
          }}
        >
          <Grid item md={5} sm={5} xs={12} sx={styles.contactUsFormNameField}>
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
          <Grid item xs={6} marginY={2}>
            <PrimaryButton>Get a call!!</PrimaryButton>
          </Grid>
        </Grid>
        <FormHelperText sx={styles.contactFormHelperText}>
          We&lsquo;ll never share your contact anywhere.
        </FormHelperText>
      </Box>
    </Box>
  )
}

export default ContactCard
