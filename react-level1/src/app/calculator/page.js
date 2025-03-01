'use client'
import React, { useEffect, useState } from 'react'
const Calculator = () => {
    const keys = ['1','2','3','+','.']
    const [isScientificModeOpen, setIsScientificModeOpen]= useState(false)
    const [input, setInput] = useState('')
  return (
    <div>
        <button onClick={()=>setIsScientificModeOpen(!isScientificModeOpen)}>Scien</button>
        {input}
        {keys.map((item)=>{
            return( <button
                onClick={()=> setInput(input+item)}
                className='bg-black text-white m-2 p-2 rounded-lg'
                 key={item}>
                {item}
                </button>)
        })} 

        {isScientificModeOpen && (
            <div > sin cos tan</div>
        )}
        <button onClick={()=> setInput('')}>AC</button>
        <button onClick={()=> setInput(eval(input))}>=</button>
    </div>
  )
}

export default Calculator