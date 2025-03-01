import { configureStore } from '@reduxjs/toolkit'
<<<<<<< HEAD

export const store = configureStore({
  reducer: {},
=======
import counterSlice from './features/counter/counterSlice'
import boxSlice from './features/box/boxSlice'


export const store = configureStore({
  reducer: {
    box: boxSlice
  },
>>>>>>> main
})