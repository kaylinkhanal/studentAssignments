'use client'
import React, { useState } from 'react'

const count = () => {
    let [a, setA ]= useState(10)
    const decrement = () =>{         //-----Decrement-----------
       setA (a-1)
        console.log(a)

    }
    const incerment = () =>{     //------------Increment---------6
      setA (a+1)
      console.log(a)
    }
    const reset = () =>{    //------------Reset-----------
      setA(10)

    }     
  return (
    <div className='text-4xl'>
        <button onClick={decrement} className='text-red-600 m-3 '>-</button>
        {a}
        <button onClick={incerment} className='text-red-600 m-3'>+</button>
        <button onClick ={reset} className='text-blue-600'>Reset</button>
    </div>
  )
}

export default count


