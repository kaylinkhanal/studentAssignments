"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Count = () => {
    let [counter, setcounter] = useState(5)
    let increment = () => {
      setcounter(counter + 1)
    }

    let decrement = () => {
      setcounter(counter - 1)
    }

  return (
   <div className='h-screen w-full flex justify-center items-center  '>
     <div className='h-[200px] w-[200px] p-3 rounded-lg shadow-xl flex justify-center items-center gap-10 bg-slate-300' >
      <Button onClick={decrement}>-</Button>
      <p className='text-center font-bold text-2xl'>{counter}</p>
      <Button onClick={increment}>+</Button>
    </div>
   </div>
  )
}

export default Count