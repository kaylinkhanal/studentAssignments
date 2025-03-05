import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: 100,
  height: 100,
  backgroundColor: "red",
  jumping: false,
  x: 0,
  y: 0,
  originalY: 0, // Store the original Y position
};

export const boxSlice = createSlice({
  name: "box",
  initialState,
  reducers: {
    incrementWidth: (state) => {
      state.width += 10;
    },
    incrementHeight: (state) => {
      state.height += 10;
    },
    changebg: (state, action) => {
      state.backgroundColor = action.payload;
    },
    moveLeft: (state) => {
      state.x -= 10;
    },
    moveRight: (state) => {
      state.x += 10;
    },
    moveUp: (state) => {
      state.y -= 10;
    },
    moveDown: (state) => {
      state.y += 10;
    },
    toggleColor: (state) => {
      state.backgroundColor = state.backgroundColor === "red" ? "blue" : "red";
    },
    startJump: (state) => {
      if (!state.jumping) {
        state.jumping = true;
        state.originalY = state.y; // Store the original Y position
        state.y -= 20; // Move up
      }
    },
    endJump: (state) => {
      state.jumping = false;
      state.y = state.originalY; // Return to the original Y position
    },
  },
});

export const {
  incrementWidth,
  incrementHeight,
  changebg,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  toggleColor,
  startJump,
  endJump,
} = boxSlice.actions;

export default boxSlice.reducer;
