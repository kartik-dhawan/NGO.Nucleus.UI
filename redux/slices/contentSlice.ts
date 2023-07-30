import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ContentStateType } from "../stateInterfaces"

const initialState: ContentStateType = {
  content: {},
}

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setContent: (
      state: ContentStateType,
      action: PayloadAction<ContentStateType>,
    ) => {
      state.content = action.payload
    },
  },
})

export const { setContent } = contentSlice.actions
export default contentSlice.reducer
