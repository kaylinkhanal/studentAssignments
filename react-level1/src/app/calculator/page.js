'use client'
import React, { useState } from "react";

// calculator component
export default function Calculator() {

  // state to store the input values
  const [input, setInput] = useState("");

 // function to update input when a button is clicked
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };
  
// function to clear the input
  const clearInput = () => {
    setInput("");
  };

  // function to calculate the result
  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 w-80 mx-auto mt-10 rounded-lg shadow-lg">
      <h1 className="font-bold pb-2 text-blue-500 "> Calculator</h1>
      <input type="text"
        value={input} readOnly
        className="w-full p-2 text-right text-xl border border-gray-300 rounded mb-2"
      />
      <div className="grid grid-cols- gap-2 w-full">
        {/* number buttons display */}
        {["7", "8", "9", "/" , "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "+", "="].map((item) => (
          <button key={item}
            onClick={() => (item === "=" ? calculateResult() : handleClick(item))}
            className={`p-5 text-white rounded-lg text-xl font-semibold shadow-lg ${["/", "*", "-", "+", "=", "."].includes(item) ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-600" }`}
            >
            {item}
          </button>
        ))}
        {/* clear button display input */}
        <button onClick={clearInput}
          className="col-span-4 p-4 bg-red-500 text-white font-extrabold rounded hover:bg-red-600"
        >
          C
        </button>
      </div>
    </div>
  );
}
