"use client";
import React, { useState } from "react";

const Counter = () => {
  let [a, setA] = useState(10)

  const decreaseCount = () => {
    setA(a=>a-1)
  }

  const increaseCount = () => {
    setA(a=>a+1)
  }
  return (
    <div>
      <button className="w-12 border-2 border-black"
      onClick={decreaseCount}
      >-</button>
      {a}
      <button className="w-12 border-2 border-black"
      onClick={increaseCount}
      >+</button>

      
    <div>
      <App value={a}/>
    </div>
    </div>

  );
};

export default Counter;
