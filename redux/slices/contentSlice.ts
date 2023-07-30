import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ContentFulENV, ContentStateType } from "../stateInterfaces"

const initialState: ContentStateType = {
  content: {},
  env: "dev",
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
    setEnv: (state: ContentStateType, action: PayloadAction<ContentFulENV>) => {
      state.env = action.payload
    },
  },
})

export const { setContent, setEnv } = contentSlice.actions
export default contentSlice.reducer
