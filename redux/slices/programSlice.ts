import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ProgramsStateType } from "../stateInterfaces"
import { GenericCardItem } from "../../utils/interfaces"

const initialState: ProgramsStateType = {
  programsList: [],
  programsCardDataList: [],
}

const programSlice = createSlice({
  name: "Programs",
  initialState,
  reducers: {
    setProgramsList: (
      state: ProgramsStateType,
      action: PayloadAction<any[]>,
    ) => {
      state.programsList = action.payload
    },
    setProgramsCardDataList: (
      state: ProgramsStateType,
      action: PayloadAction<GenericCardItem[]>,
    ) => {
      state.programsCardDataList = action.payload
    },
  },
})

export const { setProgramsList, setProgramsCardDataList } = programSlice.actions

export default programSlice.reducer
