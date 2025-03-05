import { configureStore } from "@reduxjs/toolkit";
import boxSlice from "./features/box/boxSlice";
import dinogameReducer from './features/dinogame/dinogameSlice';

export const store = configureStore({
  reducer: {
    box: boxSlice,
    dinogame: dinogameReducer
  },
});
