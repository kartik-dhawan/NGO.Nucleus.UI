import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ContactStateType } from "../stateInterfaces"
import { ContactFormData } from "../../utils/interfaces"

const initialState: ContactStateType = {
  contactsList: [],
}

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContactDetails: (
      state: ContactStateType,
      action: PayloadAction<ContactFormData[]>,
    ) => {
      state.contactsList = action.payload
    },
  },
})

export const { addContactDetails } = contactSlice.actions
export default contactSlice.reducer
