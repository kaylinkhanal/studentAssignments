"use client";
import { useState } from "react";

const Count = () => {
  const ActionTypes = {
    ADD: "add",
    DECREASE: "decrease",
  };
  const [value, setValue] = useState(0);

  const changeValue = (type) => {
    setValue((prevValue) => {
      switch (type) {
        case ActionTypes.ADD:
          return prevValue < 25 ? prevValue + 1 : prevValue;
        case ActionTypes.DECREASE:
          return prevValue > 0 ? prevValue - 1 : prevValue;
        default:
          return prevValue;
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 shadow-xl">
      <div className="text-4xl font-bold">Count Page</div>
      <div className="flex gap-2 items-center ">
        <button
          onClick={() => changeValue("decrease")}
          className="bg-blue-700 text-white px-3 py-2 font-bold text-center rounded-sm"
        >
          -
        </button>
        <div className="font-bold ">{value}</div>
        <button
          onClick={() => changeValue("add")}
          className="bg-blue-700 text-white px-3 py-2 font-bold text-center rounded-sm"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Count;
