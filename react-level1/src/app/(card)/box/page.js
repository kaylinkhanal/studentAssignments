"use client";
import {
  changebg,
  incrementHeight,
  incrementWidth,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  toggleColor,
  startJump,
  endJump,
} from "@/lib/features/box/boxSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Box = () => {
  const { width, height, backgroundColor, jumping, x, y } = useSelector(
    (state) => state.box
  );
  const dispatch = useDispatch();

  // Handle keypress events for movement & jumping
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        dispatch(startJump()); // Jump up when pressing Space
      }

      if (e.code === "ArrowLeft") {
        dispatch(moveLeft());
      } else if (e.code === "ArrowRight") {
        dispatch(moveRight());
      } else if (e.code === "ArrowUp") {
        dispatch(moveUp());
      } else if (e.code === "ArrowDown") {
        dispatch(moveDown());
      }
    };

    const handleKeyUp = (e) => {
      if (e.code === "Space") {
        dispatch(endJump()); // Return to original position when Space is released
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      {/* Dynamic Box with Jumping Animation */}
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor,
          transform: `translate(${x}px, ${y}px)`,
          transition: "transform 0.1s ease-out",
        }}
        className={`border border-black rounded-md shadow-md`}
      ></div>

      {/* Buttons to Change Redux State */}
      <div className="flex gap-2 mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => dispatch(incrementWidth())}
        >
          Increment Width
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          onClick={() => dispatch(incrementHeight())}
        >
          Increment Height
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          onClick={() => dispatch(changebg("blue"))}
        >
          Change Background Color
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
          onClick={() => dispatch(toggleColor())}
        >
          Toggle Color
        </button>
      </div>
    </div>
  );
};

export default Box;
