<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import boxSlice from "./features/box/boxSlice";
import dinogameReducer from './features/dinogame/dinogameSlice';

export const store = configureStore({
  reducer: {
    box: boxSlice,
    dinogame: dinogameReducer
  },
});
=======
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import boxSlice from './features/box/boxSlice'


export const store = configureStore({
  reducer: {
    box: boxSlice
  },
})
>>>>>>> e3af3599ff932c754937472f6c6e6d8c5b4ac347
