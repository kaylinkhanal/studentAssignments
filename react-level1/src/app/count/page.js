'use client'
import React, { useState } from 'react'
const Count = () => {
    const [a, setA]=useState(0)
    const decrement = () => {
        setA(a-1);
    }
    const increment = () => {
        setA(a+1);
    }
  return (
    <div>
        <button onClick={decrement}>-</button>
        {a}
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Count