import { Dialog } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { RootType } from "../../redux/store"
import { toggleLoginDialog } from "../../redux/slices/authSlice"
import { useCallback } from "react"

const LoginPopup = () => {
  const dispatch = useDispatch()

  const { loginDialog } = useSelector((state: RootType) => state.authSlice)

  const closePopupHandler = useCallback(() => {
    dispatch(toggleLoginDialog())
  }, [])

  return (
    <Dialog open={loginDialog} onClose={closePopupHandler}>
      <>Hello</>
    </Dialog>
  )
}

export default LoginPopup
