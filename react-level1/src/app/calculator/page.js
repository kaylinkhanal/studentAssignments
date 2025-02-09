"use client"

import { useState } from "react"

const ScientificCalculator = () => {
  const [display, setDisplay] = useState("0")
  const [memory, setMemory] = useState(null)

  const handleClick = (value) => {
    switch (value) {
      case "C":
        setDisplay("0")
        break
      case "=":
        try {
          setDisplay(eval(display).toString())
        } catch (error) {
          setDisplay("Error")
        }
        break
      case ".":
        if (!display.includes(".")) {
          setDisplay(display + value)
        }
        break
      case "DEL":
        if (display.length > 1) {
          setDisplay(display.slice(0, -1))
        } else {
          setDisplay("0")
        }
        break
      case "+/-":
        setDisplay((Number.parseFloat(display) * -1).toString())
        break
      case "sin":
      case "cos":
      case "tan":
      case "log":
      case "sqrt":
      case "cbrt":
        setDisplay(Math[value](Number.parseFloat(display)).toString())
        break
      case "%":
        setDisplay((Number.parseFloat(display) / 100).toString())
        break
      case "π":
        setDisplay(Math.PI.toString())
        break
      case "e":
        setDisplay(Math.E.toString())
        break
      case "^":
        setDisplay(display + "**")
        break
      case "M+":
        setMemory((memory || 0) + Number.parseFloat(display))
        break
      case "M-":
        setMemory((memory || 0) - Number.parseFloat(display))
        break
      case "MR":
        if (memory !== null) setDisplay(memory.toString())
        break
      case "MC":
        setMemory(null)
        break
      default:
        if (display === "0" && "+-*/".indexOf(value) === -1) {
          setDisplay(value)
        } else {
          setDisplay(display + value)
        }
        break
    }
  }

  const keys = [
    { value: "sin", color: "bg-indigo-600" },
    { value: "cos", color: "bg-indigo-600" },
    { value: "tan", color: "bg-indigo-600" },
    { value: "log", color: "bg-indigo-600" },
    { value: "ln", color: "bg-indigo-600" },
    { value: "π", color: "bg-indigo-600" },
    { value: "e", color: "bg-indigo-600" },
    { value: "^", color: "bg-indigo-600" },
    { value: "(", color: "bg-indigo-600" },
    { value: ")", color: "bg-indigo-600" },
    { value: "M+", color: "bg-purple-600" },
    { value: "M-", color: "bg-purple-600" },
    { value: "MR", color: "bg-purple-600" },
    { value: "MC", color: "bg-purple-600" },
    { value: "C", color: "bg-red-600" },
    { value: "7", color: "bg-gray-700" },
    { value: "8", color: "bg-gray-700" },
    { value: "9", color: "bg-gray-700" },
    { value: "DEL", color: "bg-red-600" },
    { value: "/", color: "bg-orange-500" },
    { value: "4", color: "bg-gray-700" },
    { value: "5", color: "bg-gray-700" },
    { value: "6", color: "bg-gray-700" },
    { value: "sqrt", color: "bg-indigo-600" },
    { value: "*", color: "bg-orange-500" },
    { value: "1", color: "bg-gray-700" },
    { value: "2", color: "bg-gray-700" },
    { value: "3", color: "bg-gray-700" },
    { value: "cbrt", color: "bg-indigo-600" },
    { value: "-", color: "bg-orange-500" },
    { value: "0", color: "bg-gray-700" },
    { value: ".", color: "bg-gray-700" },
    { value: "%", color: "bg-indigo-600" },
    { value: "+/-", color: "bg-indigo-600" },
    { value: "+", color: "bg-orange-500" },
    { value: "=", color: "bg-green-600", span: "col-span-5" },
  ]

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-4">
          <div className="bg-gray-900 p-4 rounded-lg mb-4">
            <div className="text-right text-white text-3xl font-mono truncate">{display}</div>
            {memory !== null && <div className="text-right text-gray-400 text-sm font-mono">M: {memory}</div>}
          </div>
          <div className="grid grid-cols-5 gap-2">
            {keys.map((key) => (
              <button
                key={key.value}
                onClick={() => handleClick(key.value)}
                className={`${key.color} ${key.span || ""} text-white rounded-lg p-3 text-lg font-semibold shadow-md hover:opacity-80 transition-opacity duration-200`}
              >
                {key.value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScientificCalculator

