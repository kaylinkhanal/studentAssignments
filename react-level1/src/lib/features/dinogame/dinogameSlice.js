import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isJumping: false,
  isDucking: false,
  score: 0,
  highScore: 0,
  gameSpeed: 6,
  isGameOver: false,
  position: {
    x: 50,
    y: 0,
    height: 60,
    width: 40,
  },
  obstacles: [],
  powerUps: [],
  gameStats: {
    jumps: 0,
    obstaclesAvoided: 0,
    powerUpsCollected: 0,
    timeElapsed: 0,
  },
};

export const dinoGameSlice = createSlice({
  name: "dinogame",
  initialState,
  reducers: {
    jump: (state) => {
      if (!state.isJumping && !state.isGameOver) {
        state.isJumping = true;
        state.position.y = 100; // Jump height
        state.gameStats.jumps += 1;
      }
    },
    land: (state) => {
      state.isJumping = false;
      state.position.y = 0;
    },
    duck: (state) => {
      if (!state.isJumping && !state.isGameOver) {
        state.isDucking = true;
        state.position.height = 30; // Half height while ducking
      }
    },
    standUp: (state) => {
      state.isDucking = false;
      state.position.height = 60;
    },
    updateScore: (state, action) => {
      state.score = action.payload;
      if (state.score > state.highScore) {
        state.highScore = state.score;
      }
    },
    addObstacle: (state, action) => {
      state.obstacles.push({
        id: Date.now(),
        type: action.payload.type,
        position: action.payload.position,
        width: action.payload.width,
        height: action.payload.height,
      });
    },
    removeObstacle: (state, action) => {
      state.obstacles = state.obstacles.filter(
        (obstacle) => obstacle.id !== action.payload
      );
      state.gameStats.obstaclesAvoided += 1;
    },
    addPowerUp: (state, action) => {
      state.powerUps.push({
        id: Date.now(),
        type: action.payload.type,
        position: action.payload.position,
        effect: action.payload.effect,
      });
    },
    collectPowerUp: (state, action) => {
      state.powerUps = state.powerUps.filter(
        (powerUp) => powerUp.id !== action.payload
      );
      state.gameStats.powerUpsCollected += 1;
    },
    increaseGameSpeed: (state) => {
      state.gameSpeed = Math.min(state.gameSpeed + 0.1, 12);
    },
    gameOver: (state) => {
      state.isGameOver = true;
    },
    resetGame: (state) => {
      return {
        ...initialState,
        highScore: state.highScore, // Preserve high score
      };
    },
    updateTimeElapsed: (state, action) => {
      state.gameStats.timeElapsed = action.payload;
    },
  },
});

export const {
  jump,
  land,
  duck,
  standUp,
  updateScore,
  addObstacle,
  removeObstacle,
  addPowerUp,
  collectPowerUp,
  increaseGameSpeed,
  gameOver,
  resetGame,
  updateTimeElapsed,
} = dinoGameSlice.actions;

export default dinoGameSlice.reducer;
