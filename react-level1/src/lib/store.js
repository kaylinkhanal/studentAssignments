import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import  boxSlice  from './features/box/boxSlice'
import squidSlice from './features/squid/squidSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    box: boxSlice,
    squid: squidSlice,
  },
})