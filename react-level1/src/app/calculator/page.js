"use client";
import { RotateCcw } from "lucide-react";
import React, { useState } from "react";

const Calculator = () => {
  const [getBody, setGetBody] = useState([]);
  const maxLength = 12
  const calBody = [9, 8, 7, 6, 5, 4, 3, 2, 1, ".", 0];
  const handleClick = (bodyItem) => {
    setGetBody([...getBody, bodyItem]);
  };

  const handleEqualsTo = () => {
    try {
      if (getBody) {
        const numToBeConverted = getBody.join("");
        const calculation = eval(numToBeConverted);
        setGetBody([calculation.toString()]);
      }
    } catch (error) {
      setGetBody(["ERROR"]);
    }
  };

  const deleteAll = () => {
    setGetBody([]);
  };

  const handleUndo = ()=>{
    const body = [...getBody]
    const undo = body.slice(0,-1)
    setGetBody(undo)
  }

  return (
    // <div className="w-screen h-screen bg-gradient-to-br from-gray-500 to-slate-800 flex flex-col justify-center items-center">
    //   <div className="w-fit bg-gray-500 shadow-2xl rounded-2xl p-6">
    //     <div className="h-16 w-full bg-gray-200 rounded-lg flex justify-end items-center px-4 text-4xl font-mono text-black">
    //       {getBody}
    //     </div>

    //     <div className="grid grid-cols-4 gap-3 mt-5 w-fit mb-3">
    //       <div onClick={()=> handleUndo()} className="cursor-pointer h-16 w-16 text-white rounded-lg shadow-md flex justify-center items-center text-xl bg-gray-600 font-extrabold">
    //         <RotateCcw />
    //       </div>
    //       <div onClick={() => handleClick('%')} className="cursor-pointer h-16 w-16 text-white rounded-lg shadow-md flex justify-center items-center text-xl bg-gray-600 font-extrabold">
    //         %
    //       </div>
    //       <div onClick={() => handleClick("/")} className="cursor-pointer h-16 w-16 text-white rounded-lg shadow-md flex justify-center items-center text-xl bg-gray-600 font-extrabold">
    //         /
    //       </div>
    //       <div onClick={() => handleClick("*")} className="h-16 w-16 rounded-lg shadow-md flex justify-center items-center text-xl text-white bg-gray-600 font-extrabold">
    //         *
    //       </div>
    //     </div>

    //     <div className="grid grid-cols-4 w-fit gap-3">
    //       <div className="col-span-3 grid grid-cols-3 gap-3">
    //         {calBody.map((bodyItem, id) => {
    //           return (
    //             <div
    //               onClick={() => handleClick(bodyItem)}
    //               key={id}
    //               className={`cursor-pointer h-16 w-16 text-white rounded-lg shadow-md flex justify-center items-center text-xl ${
    //                 bodyItem === "C"
    //                   ? "bg-red-700"
    //                   : " bg-gray-600 font-extrabold"
    //               }`}
    //             >
    //               {bodyItem}
    //             </div>
    //           );
    //         })}
    //         <button
    //           onClick={() => deleteAll()}
    //           className="h-16 w-16 rounded-lg shadow-md flex justify-center items-center text-xl text-white bg-red-500"
    //         >
    //           AC
    //         </button>
    //       </div>
    //       <div className="flex flex-col gap-3">
    //         <div onClick={() => handleClick('-')} className="h-16 w-16 rounded-lg shadow-md flex justify-center items-center text-xl text-white  bg-gray-600 font-extrabold">
    //           -
    //         </div>
    //         <div onClick={() => handleClick('+')} className="h-16 w-16 rounded-lg shadow-md flex justify-center items-center text-xl text-white  bg-gray-600 font-extrabold">
    //           +
    //         </div>
    //         <button onClick={() => handleEqualsTo()} className="flex-1 h-16 w-16 rounded-lg shadow-md flex justify-center items-center text-xl text-white bg-green-500">
    //           =
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div className="w-screen h-screen bg-gradient-to-br from-gray-900 to-slate-950 flex flex-col justify-center items-center">
    <div className="w-fit bg-gray-800 shadow-2xl rounded-2xl p-6 border border-gray-700">
      <div className="h-16 w-full bg-gray-900 rounded-lg flex justify-end items-center px-4 text-4xl font-mono text-green-400 overflow-x-hidden ">
        {getBody}
      </div>
      
      <div className="grid grid-cols-4 gap-3 mt-5 w-fit mb-3">
        <div onClick={()=> handleUndo()} className="cursor-pointer h-16 w-16 text-gray-300 rounded-lg shadow-md flex justify-center items-center text-xl bg-gray-700 hover:bg-gray-600 transition-colors">
          <RotateCcw size={24} />
        </div>
        {['%', '/', '*'].map((op) => (
          <div 
            key={op}
            onClick={() => handleClick(op)} 
            className="cursor-pointer h-16 w-16 text-gray-300 rounded-lg shadow-md flex justify-center items-center text-xl bg-gray-700 hover:bg-gray-600 transition-colors"
            style={{ pointerEvents: getBody.length > maxLength ? 'none' : 'auto' }}
          >
            {op}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-4 w-fit gap-3">
        <div className="col-span-3 grid grid-cols-3 gap-3">
          {calBody.map((bodyItem) => (
            <div
              key={bodyItem}
              onClick={() => handleClick(bodyItem)}
              className={`cursor-pointer h-16 w-16 text-gray-300 rounded-lg shadow-md flex justify-center items-center text-xl ${
                bodyItem === "C"
                  ? "bg-red-900 hover:bg-red-800"
                  : "bg-gray-700 hover:bg-gray-600"
              } transition-colors`}
              style={{ pointerEvents: getBody.length > maxLength ? 'none' : 'auto' }}
            >
              {bodyItem}
            </div>
          ))}
          <button
            onClick={()=>deleteAll()}
            className="h-16 w-16 rounded-lg shadow-md flex justify-center items-center text-xl text-gray-300 bg-red-900 hover:bg-red-800 transition-colors"
          >
            AC
          </button>
        </div>
        
        <div className="flex flex-col gap-3">
          {['-', '+'].map((op) => (
            <div 
              key={op}
              onClick={() => handleClick(op)} 
              className="h-16 w-16 rounded-lg shadow-md flex justify-center items-center text-xl text-gray-300 bg-gray-700 hover:bg-gray-600 transition-colors"
              style={{ pointerEvents: getBody.length > maxLength ? 'none' : 'auto' }}
            >
              {op}
            </div>
          ))}
          <button 
            onClick={()=>handleEqualsTo()} 
            className="flex-1 h-16 w-16 rounded-lg shadow-md flex justify-center items-center text-xl text-gray-300 bg-emerald-800 hover:bg-emerald-700 transition-colors"
          >
            =
          </button>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Calculator;
