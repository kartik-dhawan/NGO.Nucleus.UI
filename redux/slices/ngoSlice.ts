import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { NgoStateType } from "../stateInterfaces"

const initialState: NgoStateType = {
  ngoList: [],
}

const ngoSlice = createSlice({
  name: "NGOs",
  initialState,
  reducers: {
    setNgosList: (state: NgoStateType, action: PayloadAction<any[]>) => {
      state.ngoList = action.payload
    },
  },
})

export const { setNgosList } = ngoSlice.actions
export default ngoSlice.reducer
