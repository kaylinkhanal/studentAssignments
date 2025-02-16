import { configureStore } from '@reduxjs/toolkit'
import boxSlice from './features/box/boxSlice'
import squidSlice from './features/squid/squidSlice'

export default configureStore({
  reducer: {
    box: boxSlice,
    game: squidSlice,
  }
})