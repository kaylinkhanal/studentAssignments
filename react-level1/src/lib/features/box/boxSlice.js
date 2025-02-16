import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  width: 100,
  height: 100,
  backgroundColor: 'red',
  shape:'rectangle',
  marginLetf: '0'
}

export const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    incrementWidth: (state) => {
      state.width += 10
    },
    incrementHeight: (state) => {
      state.height += 10
    },
    decrementWidth: (state) => {
      state.width -= 10
    },
    decrementHeight: (state) => {
      state.height -= 10
    },
    changeColor: (state)=>{
        const r = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        state.backgroundColor = `rgb(${r},${g},${b})`
    },
    changeSize: (state)=>{
      const w = Math.floor(Math.random() * (700 - 50 + 1)) + 50
      const h = Math.floor(Math.random() * (700 - 50 + 1)) + 50
      state.height = h
      state.width = w
    },
    changeShape: (state, action)=>{
      state.shape = action.payload
    },
    ChangePosition: (state)=>{
      state.marginLetf += 10
    }
   
  },
})

export const { incrementWidth, incrementHeight, decrementHeight,decrementWidth, changeColor,changeSize, changeShape, ChangePosition } = boxSlice.actions

export default boxSlice.reducer