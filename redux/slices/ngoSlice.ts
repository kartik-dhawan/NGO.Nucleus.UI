import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { NgoStateType } from "../stateInterfaces"
import { GenericCardItem } from "../../utils/interfaces"

const initialState: NgoStateType = {
  ngoList: [],
  ngoCardDataList: [],
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
  },
})

export const { setNgosList, setNgoCardDataList } = ngoSlice.actions
export default ngoSlice.reducer
