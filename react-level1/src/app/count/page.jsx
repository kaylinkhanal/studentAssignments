"use client";
import { useState } from "react";

const Count = () => {
  let [value, setValue] = useState(0);
  const addValue = () => {
    if (value < 25) {
      value = value + 1;
      setValue(value);
      console.log(value);
    }
  };

  const decreaseValue = () => {
    if (value > 0) {
      value = value - 1;
      setValue(value);
      console.log(value);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 shadow-xl">
      <div className="text-4xl font-bold">Count Page</div>
      <div className="flex gap-2 items-center ">
        <button
          onClick={decreaseValue}
          className="bg-blue-700 text-white px-3 py-2 font-bold text-center rounded-sm"
        >
          -
        </button>
        <div className="font-bold ">{value}</div>
        <button
          onClick={addValue}
          className="bg-blue-700 text-white px-3 py-2 font-bold text-center rounded-sm"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Count;
