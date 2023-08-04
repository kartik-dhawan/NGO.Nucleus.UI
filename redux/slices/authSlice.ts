import { createSlice } from "@reduxjs/toolkit"
import { AuthStateType } from "../stateInterfaces"

const initialState: AuthStateType = {
  loginDialog: false,
  menuList: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleLoginDialog: (state: AuthStateType) => {
      state.loginDialog = !state.loginDialog
    },
    toggleMenuList: (state: AuthStateType) => {
      state.menuList = !state.menuList
    },
  },
})

export const { toggleLoginDialog, toggleMenuList } = authSlice.actions
export default authSlice.reducer
