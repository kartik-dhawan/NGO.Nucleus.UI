import { configureStore } from "@reduxjs/toolkit"
import contentSlice from "../slices/contentSlice"
import authSlice from "../slices/authSlice"
import contactSlice from "../slices/contacts"
import ngoSlice from "../slices/ngoSlice"
import programSlice from "../slices/programSlice"

const store = configureStore({
  reducer: {
    contentSlice,
    authSlice,
    contactSlice,
    ngoSlice,
    programSlice,
  },
})

export type RootType = ReturnType<typeof store.getState>

export default store
