import { configureStore } from "@reduxjs/toolkit"
import contentSlice from "../slices/contentSlice"
import authSlice from "../slices/authSlice"
import contactSlice from "../slices/contacts"

const store = configureStore({
  reducer: {
    contentSlice,
    authSlice,
    contactSlice,
  },
})

export type RootType = ReturnType<typeof store.getState>

export default store
