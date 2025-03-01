import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  width: 100,
  height: 100,
  backgroundColor: 'red'
}

export const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    incrementWidth: (state) => {
      state.width += 10
    },
    incrementHeight: (state) => {
      state.height -= 10
    },
   
  },
})

export const { incrementWidth, incrementHeight } = boxSlice.actions

export default boxSlice.reducer