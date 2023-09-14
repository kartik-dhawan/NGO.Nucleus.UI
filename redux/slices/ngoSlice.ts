import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { NgoStateType } from "../stateInterfaces"
import { GenericCardItem, GenericDonateListItem } from "../../utils/interfaces"

const initialState: NgoStateType = {
  ngoList: [],
  ngoCardDataList: [],
  currentNgoListItem: null,
  donateToSuccess: false,
  emailPopup: false,
  email: "",
}

const ngoSlice = createSlice({
  name: "NGOs",
  initialState,
  reducers: {
    setNgosList: (state: NgoStateType, action: PayloadAction<any[]>) => {
      state.ngoList = action.payload
    },
    setNgoCardDataList: (
      state: NgoStateType,
      action: PayloadAction<GenericCardItem[]>,
    ) => {
      state.ngoCardDataList = action.payload
    },
    setCurrentNgoListData: (
      state: NgoStateType,
      action: PayloadAction<GenericDonateListItem>,
    ) => {
      state.donateToSuccess = true
      state.currentNgoListItem = action.payload
    },
    resetDonateToSuccess: (state: NgoStateType) => {
      state.donateToSuccess = false
    },
    setUserDonationEmail: (
      state: NgoStateType,
      action: PayloadAction<string>,
    ) => {
      state.email = action.payload
      state.emailPopup = false
    },
  },
})

export const {
  setNgosList,
  setNgoCardDataList,
  setCurrentNgoListData,
  resetDonateToSuccess,
  setUserDonationEmail,
} = ngoSlice.actions

export default ngoSlice.reducer
