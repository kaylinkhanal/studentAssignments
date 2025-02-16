"use client";
import {
  changeColor,
  ChangePosition,
  changeShape,
  changeSize,
  decrementHeight,
  decrementWidth,
  incrementHeight,
  incrementWidth,
} from "@/lib/features/box/boxSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Box = () => {
  const { width, height, backgroundColor, shape, marginLetf } = useSelector((state) => state.box);
  const dispatch = useDispatch();

  const shapeStyles = ()=>{
    const baseStyles = {
      width,
      height,
      backgroundColor,
      marginLetf,
    }
    switch(shape){
      case 'circle':
        return{...baseStyles, borderRadius: '50%'}
      default:
        return baseStyles
    }
  }


  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowUp") {
        dispatch(incrementHeight());
      }

      if (e.key === "ArrowRight") {
        dispatch(incrementWidth());
      }
      if (e.key === "ArrowDown") {
        dispatch(decrementHeight());
      }

      if (e.key === "ArrowLeft") {
        dispatch(decrementWidth());
      }

      if (e.key === "Enter") {
        dispatch(changeSize());
      }

      if(e.key === ' '){
        dispatch(changeColor())
      }
      if(e.key === 'r'){
        dispatch(ChangePosition())
      }
      console.log(e.key);
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="min-h-screen min-w-screen bg-gray-100 p-8">
      <div className="w-fit p-5 mx-auto space-y-6  h-auto ">
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <div
            style={
              shapeStyles()
            }
            className="transition-all duration-300 ease-in-out rounded-lg shadow-inner"
          />
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={(e) => dispatch(incrementWidth())}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          >
            Increment Width
          </button>

          <button
            onClick={() => dispatch(incrementHeight())}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
          >
            Increment Height
          </button>

          <button
            onClick={() => dispatch(changeColor())}
            className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors"
          >
            Change Color
          </button>
          <button
            onClick={() => dispatch(changeSize())}
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors"
          >
            Change Size
          </button>
          <button
            onClick={() => dispatch(changeShape('circle'))}
            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-colors"
          >
            Circle
          </button>
        </div>
      </div>
            <div>

            </div>
    </div>
  );
};

export default Box;
