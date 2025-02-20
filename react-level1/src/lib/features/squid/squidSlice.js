import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  margin: 0,
}

export const squidSlice = createSlice({
  name : 'squid',
  initialState,
  reducers: {
    forward: (state) => {
      if (state.margin < 750) {
        state.margin += 5;
      }
    },
    restart : (state) => {
      state.margin = 0;
    }
  }
})

export const { forward, restart } = squidSlice.actions

export default squidSlice.reducer