"use client";
import React, { useEffect, useState } from "react";

const Calculator = () => {
  const keys = [
    "AC",
    "C",
    "%",
    "÷",
    "7",
    "8",
    "9",
    "×",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

    const handleClick = (key) => {
      switch (key) {
        case "AC":
          setInput("");
          setResult("");
          break;
        case "C":
          setInput(input.slice(0, -1));
          break;
        case "=":
          try {
            // Replace × with * and ÷ with / for evaluation
            const evalInput = input.replace(/×/g, "*").replace(/÷/g, "/");
            const calculatedResult = eval(evalInput);
            setResult(calculatedResult.toString());
            setInput(calculatedResult.toString());
          } catch (error) {
            setResult("Error");
          }
          break;
        case "×":
        case "÷":
        case "+":
        case "-":
        case "%":
        case ".":
          // Prevent consecutive operators
          if (!"+-×÷%.".includes(input.slice(-1))) {
            setInput((prev) => prev + key);
          }
          break;
        default:
          setInput((prev) => prev + key);
      }
    };
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-80">
        {/* Calculator Header */}
        <div className="p-4 border-b">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Calculator
          </h1>
        </div>

        {/* Display */}
        <div className="p-4 bg-gray-50">
          <div className="bg-white border rounded-lg p-4 mb-4">
            <div className="text-right text-lg font-mono text-gray-500 min-h-[24px]">
              {input || "0"}
            </div>
            <div className="text-right text-3xl font-mono font-semibold min-h-[40px]">
              {result || "0"}
            </div>
          </div>

          {/* Keypad */}
          <div className="grid grid-cols-4 gap-2">
            {keys.map((key) => (
              <button
                key={key}
                onClick={() => handleClick(key)}
                className={`
                                    p-4 text-xl font-semibold rounded-lg
                                    ${
                                      key === "AC" || key === "C"
                                        ? "bg-red-500 text-white hover:bg-red-600"
                                        : key === "+" ||
                                          key === "-" ||
                                          key === "×" ||
                                          key === "÷" ||
                                          key === "=" ||
                                          key === "%"
                                        ? "bg-blue-500 text-white hover:bg-blue-600"
                                        : "bg-gray-200 hover:bg-gray-300"
                                    }
                                    transition-colors duration-200
                                    active:transform active:scale-95
                                    ${key === "0" ? "col-span-1" : ""}
                                `}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
