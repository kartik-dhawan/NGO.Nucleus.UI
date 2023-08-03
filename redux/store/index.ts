import { configureStore } from "@reduxjs/toolkit"
import contentSlice from "../slices/contentSlice"
import authSlice from "../slices/authSlice"

const store = configureStore({
  reducer: {
    contentSlice,
    authSlice,
  },
})

export type RootType = ReturnType<typeof store.getState>

export default store
