<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";
=======
import { createSlice } from '@reduxjs/toolkit'
>>>>>>> e3af3599ff932c754937472f6c6e6d8c5b4ac347

const initialState = {
  width: 100,
  height: 100,
<<<<<<< HEAD
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
=======
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
>>>>>>> e3af3599ff932c754937472f6c6e6d8c5b4ac347
