import { Button, CircularProgress } from "@mui/material"
import { useState, useCallback } from "react"
import { useDispatch } from "react-redux"
import { setCurrentNgoListData } from "../../../redux/slices/ngoSlice"

const DonateButton = ({ row }: any) => {
  const dispatch = useDispatch()

  const [donateSuccess, setDonateSuccess] = useState<boolean | "loading">(false)

  const donateButtonHandler = useCallback(() => {
    setDonateSuccess("loading")
    setTimeout(() => {
      setDonateSuccess(true)
      dispatch(setCurrentNgoListData(row))
    }, 2000)
  }, [])

  return (
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
  )
}

export default DonateButton
