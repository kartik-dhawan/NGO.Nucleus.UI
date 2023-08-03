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
import React, { useCallback } from "react"
import Link from "next/link"
import { styles } from "./styles"
import Slide from "@mui/material/Slide"
import { TransitionProps } from "@mui/material/transitions"

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

const LoginPopup = () => {
  const dispatch = useDispatch()
  const theme = useTheme()

  const { loginDialog } = useSelector((state: RootType) => state.authSlice)

  const closePopupHandler = useCallback(() => {
    dispatch(toggleLoginDialog())
  }, [])

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Dialog
      open={loginDialog}
      onClose={closePopupHandler}
      fullScreen={fullScreen}
      sx={styles.loginDialog}
      TransitionComponent={SlideTransition}
    >
      <DialogTitle className="poppins" sx={styles.loginDialogTitle}>
        Login
      </DialogTitle>
      <DialogContent sx={styles.loginDialogContentWrapper}>
        <TextField
          sx={styles.loginPopupTextField}
          label="Email"
          variant="outlined"
        />
        <TextField
          sx={styles.loginPopupTextField}
          label="Password"
          type="password"
          variant="outlined"
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
            <Button className="cormorant" sx={styles.loginButton}>
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
