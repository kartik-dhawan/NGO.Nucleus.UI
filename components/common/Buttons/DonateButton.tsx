import { Box, Button, CircularProgress, Dialog } from "@mui/material"
import { useState, useCallback, useEffect } from "react"
import { useDispatch } from "react-redux"
import {
  setUserDonationEmail,
  setCurrentNgoListData,
  resetDonateToSuccess,
} from "../../../redux/slices/ngoSlice"
import CustomTextField from "../CustomTextfield"
import PrimaryButton from "./PrimaryButton"
import { isEmailInValidFormat } from "../../../utils/methods"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt"
import { addDoc, collection } from "firebase/firestore"
import { firestore } from "../../../firebase/config"
import { v4 as uuidv4 } from "uuid"
import { useRouter } from "next/router"

const DonateButton = ({ row }: any) => {
  const collectionRef = collection(firestore, "donations")

  const dispatch = useDispatch()
  const router = useRouter()

  const [donateSuccess, setDonateSuccess] = useState<boolean | "loading">(false)
  const [email, setEmail] = useState<string>("")

  const [emailPopup, setEmailPopup] = useState<boolean>(false)
  const [errorState, setErrorState] = useState<boolean>(false)

  const donateButtonHandler = useCallback(() => {
    setEmailPopup(true)
  }, [email])

  useEffect(() => {
    dispatch(resetDonateToSuccess())
  }, [router.pathname])

  const setDataInFirebaseHandler = () => {
    setErrorState(false)
    dispatch(setUserDonationEmail(email))
    setDonateSuccess("loading")
    dispatch(setCurrentNgoListData(row))
    try {
      addDoc(collectionRef, {
        email,
        selectedNgos: [row],
        iat: new Date().toLocaleDateString(),
        ucid: uuidv4(),
        status: "Pending",
      })
      setDonateSuccess(true)
      setEmailPopup(false)
    } catch (error) {
      setDonateSuccess(false)
      setErrorState(true)
      dispatch(setUserDonationEmail(""))
      setDonateSuccess(false)
    }
  }

  return (
    <Box>
      <Dialog
        open={emailPopup}
        onClose={() => {
          setEmailPopup(false)
        }}
      >
        <Box
          sx={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "2rem 2rem",
            gap: "2rem",
          }}
        >
          {errorState && <Box>Error</Box>}
          <CustomTextField
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
          />
          <PrimaryButton
            icon={<ArrowRightAltIcon />}
            disabled={!isEmailInValidFormat(email)}
            onClick={setDataInFirebaseHandler}
          >
            Submit
          </PrimaryButton>
        </Box>
      </Dialog>
      <Button
        className="robotoCondensed"
        disabled={donateSuccess !== "loading" ? donateSuccess : false}
        onClick={donateButtonHandler}
        sx={{
          height: "40px",
          width: "90px",
          backgroundColor: "#FCEE48",
          color: "#111",
          fontWeight: 700,
          "&:hover": {
            backgroundColor: "#FCEE48",
            opacity: 0.8,
          },
        }}
      >
        {donateSuccess === "loading" ? (
          <CircularProgress
            sx={{
              height: "20px !important",
              width: "20px !important",
            }}
          />
        ) : (
          "Donate"
        )}
      </Button>
    </Box>
  )
}

export default DonateButton
