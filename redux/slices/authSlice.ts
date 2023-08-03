import { createSlice } from "@reduxjs/toolkit"
import { AuthStateType } from "../stateInterfaces"

const initialState: AuthStateType = {
  loginDialog: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleLoginDialog: (state: AuthStateType) => {
      state.loginDialog = !state.loginDialog
    },
  },
})

export const { toggleLoginDialog } = authSlice.actions
export default authSlice.reducer
