"use client";
import React, { useState } from "react";

const Calculator = () => {
  const [getBody, setGetBody] = useState([]);

  const calBody = [9, 8, 7, "+", 6, 5, 4, "-", 3, 2, 1, "*", 0, "C", "/"];
  const handleClick = (bodyItem) => {
    if (bodyItem === "C") {
      setGetBody([]);
      return;
    }

    setGetBody([...getBody, bodyItem]);
  };

  const handleEqualsTo = () => {
		try {
			if(getBody){
				const numToBeConverted = getBody.join('')
				const calculation = eval(numToBeConverted)
				setGetBody(calculation)
			}
		} catch (error) {
			setGetBody('ERROR')
		}
	};

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-gray-500 to-slate-800 flex flex-col justify-center items-center">
      <div className="w-[360px] bg-white shadow-2xl rounded-2xl p-6">
        <div className="h-16 w-full bg-gray-200 rounded-lg flex justify-end items-center px-4 text-2xl font-mono text-gray-800">
          {getBody}
        </div>

        <div className="grid grid-cols-4 gap-3 mt-5">
          {calBody.map((bodyItem, id) => {
            return (
              <div
                onClick={() => handleClick(bodyItem)}
                key={id}
                className={`cursor-pointer h-16 w-16  text-white rounded-lg shadow-md hover:scale-105 transition-transform flex justify-center items-center text-xl ${bodyItem === 'C' ? 'bg-red-700' : 'bg-gradient-to-br from-gray-900 to-gray-700' }`}
              >
                {bodyItem}
              </div>
            );
          })}
          <button
            onClick={() => handleEqualsTo()}
            className="h-16 w-16 bg-gradient-to-br from-green-600 to-green-500 text-white rounded-lg shadow-md hover:scale-105 transition-transform text-xl"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
