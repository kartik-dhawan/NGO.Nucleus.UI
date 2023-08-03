import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { RootType } from "../../redux/store"
import { toggleLoginDialog } from "../../redux/slices/authSlice"
import React, { useCallback, useState } from "react"
import Link from "next/link"
import { styles } from "./styles"
import Slide from "@mui/material/Slide"
import { TransitionProps } from "@mui/material/transitions"
import { LoginFormData } from "../../utils/interfaces"
import { isEmailInValidFormat } from "../../utils/methods"

const SlideTransition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return (
    <Slide direction="down" ref={ref} {...props} mountOnEnter unmountOnExit />
  )
})

const initialState: LoginFormData = {
  email: "",
  password: "",
}

interface LoginFormInputErrorState {
  email: boolean
  password: boolean
}

const LoginPopup = () => {
  const dispatch = useDispatch()
  const theme = useTheme()

  const [loginFormData, setLoginFormData] =
    useState<LoginFormData>(initialState)
  const [loginFormInputError, setLoginFormInputError] =
    useState<LoginFormInputErrorState>({
      email: false,
      password: false,
    })

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))

  const { loginDialog } = useSelector((state: RootType) => state.authSlice)

  const closePopupHandler = useCallback(() => {
    dispatch(toggleLoginDialog())
  }, [])

  const loginHandler = useCallback(() => {
    setLoginFormInputError({
      email: !isEmailInValidFormat(loginFormData.email),
      password: loginFormData.password.length <= 6,
    })
  }, [loginFormData])

  return (
    <Dialog
      open={loginDialog}
      onClose={closePopupHandler}
      fullScreen={fullScreen}
      sx={styles.loginDialog}
      TransitionComponent={SlideTransition}
    >
      <DialogTitle className="poppins" sx={styles.loginDialogTitle}>
        Admin Login
      </DialogTitle>
      <DialogContent sx={styles.loginDialogContentWrapper}>
        <TextField
          sx={styles.loginPopupTextField}
          label="Email"
          variant="outlined"
          value={loginFormData.email}
          onChange={(e) => {
            setLoginFormData({ ...loginFormData, email: e.target.value })
          }}
          error={loginFormInputError.email}
          helperText={loginFormInputError.email && "Please recheck your email."}
        />
        <TextField
          sx={styles.loginPopupTextField}
          label="Password"
          type="password"
          variant="outlined"
          value={loginFormData.password}
          onChange={(e) => {
            setLoginFormData({ ...loginFormData, password: e.target.value })
          }}
          error={loginFormInputError.password}
          helperText={
            loginFormInputError.password && "Please recheck your password."
          }
        />
      </DialogContent>
      <DialogActions>
        <Grid container gap={4} marginX={3} marginY={4}>
          <Grid
            className="cormorant"
            item
            xs={12}
            sx={styles.loginDialogActionLink}
          >
            <Link href="#">Forgot your password?</Link>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
            }}
          >
            <Button sx={styles.loginButton} onClick={loginHandler}>
              Login
            </Button>
          </Grid>
          <Grid
            className="cormorant"
            item
            xs={12}
            sx={styles.loginDialogActionLink}
          >
            <Link href="/" onClick={closePopupHandler}>
              Return to home.
            </Link>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  )
}

export default LoginPopup
