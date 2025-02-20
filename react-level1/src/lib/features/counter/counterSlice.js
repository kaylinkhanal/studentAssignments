import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increament: (state) => {
      state.value += 1
    },
    increamentByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increament, increamentByAmount } = counterSlice.actions
export default counterSlice.reducer