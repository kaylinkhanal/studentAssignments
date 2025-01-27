'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Count = () => {
    let [count, setCount] = useState(0)
    const increment = ()=>{
        setCount(count => count + 1)
    }
    const decrement = ()=>{
        setCount(count => count - 1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
    </div>
  )
}

export default Count