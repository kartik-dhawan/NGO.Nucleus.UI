import {
  Box,
  Typography,
  Grid,
  FormHelperText,
  CircularProgress,
  Fade,
} from "@mui/material"
import PrimaryButton from "../Buttons/PrimaryButton"
import CustomTextField from "../CustomTextfield"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { ContactFormData } from "../../../utils/interfaces"
import { ContentfulVariable } from "../../../redux/stateInterfaces"
import { styles } from "./styles"
import { isEmailInValidFormat } from "../../../utils/methods"
import { addDoc, collection } from "firebase/firestore"
import { firestore } from "../../../firebase/config"
import TaskAltIcon from "@mui/icons-material/TaskAlt"
import ErrorOutlineIcon from "@mui/icons-material/Error"

const initialState: ContactFormData = {
  name: "",
  email: "",
  contactNumber: "",
}

interface ContactCardProps {
  content: ContentfulVariable
}

const ContactCard = ({ content }: ContactCardProps) => {
  // refers to the collection named 'userContactDetails' in firebase
  const collectionRef = collection(firestore, "userContactDetails")

  const [contactFormData, setContactFormData] =
    useState<ContactFormData>(initialState)
  const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(true)
  const [getACallLoader, setGetACallLoader] = useState<boolean>(false)
  const [formSuccessIcon, setFormSuccessIcon] = useState<boolean>(false)
  const [formErrorState, setFormErrorState] = useState<boolean>(false)
  const [errorMessage, setErrorMessgae] = useState<string>(
    "Network error: Please try again later.",
  )

  useEffect(() => {
    if (
      contactFormData.name.length >= 3 &&
      contactFormData.contactNumber.length >= 10 &&
      contactFormData.contactNumber.length < 15
    ) {
      setFormButtonDisabled(false)
    } else {
      setFormButtonDisabled(true)
    }
  }, [contactFormData])

  const getACallHandler = useCallback(() => {
    setFormErrorState(false)
    setGetACallLoader(true)

    console.log(contactFormData.email)

    contactFormData.email === "" /* eslint-disable-line */ ||
    isEmailInValidFormat(contactFormData.email)
      ? addDoc(collectionRef, {
          ...contactFormData,
          iat: Date.now(),
        })
          .then((res) => {
            console.log(res)
            setGetACallLoader(false)
            setFormSuccessIcon(true)
            setContactFormData(initialState)
          })
          .catch((err) => {
            console.log(err)
            setGetACallLoader(false)
            setFormErrorState(true)
          })
      : (setFormErrorState(true),
        setGetACallLoader(false),
        setErrorMessgae("Email is in an invalid format."))
  }, [contactFormData])

  useEffect(() => {
    if (formSuccessIcon === true) {
      setTimeout(() => {
        setFormSuccessIcon(false)
      }, 3500)
    }
  }, [formSuccessIcon])

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
              onChange={(e) => {
                setContactFormData({
                  ...contactFormData,
                  name: e.target.value,
                })
              }}
              required
            />
          </Grid>
          <Grid item md={5} sm={5} xs={12}>
            <CustomTextField
              label="Contact Number"
              value={contactFormData.contactNumber}
              onChange={(e) => {
                setContactFormData({
                  ...contactFormData,
                  contactNumber: e.target.value,
                })
              }}
              required
              helperText="Please include country code as well."
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <CustomTextField
              label="Email"
              value={contactFormData.email}
              onChange={(e) => {
                setContactFormData({
                  ...contactFormData,
                  email: e.target.value,
                })
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            marginY={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <PrimaryButton
              disabled={formButtonDisabled}
              onClick={getACallHandler}
            >
              Get a call!!
            </PrimaryButton>
            {getACallLoader && (
              <CircularProgress
                sx={{
                  "& > svg": {
                    transform: "scale(0.6)",
                  },
                }}
              />
            )}
            {formErrorState && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& > svg": {
                    margin: "4px 8px",
                    backgroundColor: "F1EFE9",
                    borderRadius: "100px",
                    color: "maroon",
                  },
                }}
              >
                <Fade in={formErrorState}>
                  <ErrorOutlineIcon />
                </Fade>
              </Box>
            )}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                "& > svg": {
                  margin: "4px 8px",
                  backgroundColor: "#1DB954",
                  borderRadius: "100px",
                  color: "#F1EFE9",
                },
              }}
            >
              <Fade in={formSuccessIcon}>
                <TaskAltIcon />
              </Fade>
            </Box>
          </Grid>
        </Grid>
        <FormHelperText sx={styles.contactFormHelperText}>
          {formSuccessIcon
            ? "Our team will contact you shortly."
            : formErrorState
            ? errorMessage
            : "We'll never share your contact anywhere."}
        </FormHelperText>
      </Box>
    </Box>
  )
}

export default ContactCard
