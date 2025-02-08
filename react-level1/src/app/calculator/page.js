'use client'
import React,{ useState} from 'react'

const Calculator = () => {
    const keys = ['1','2','3','+']
    const [input, setInput]= useState('')
  return (
    <div>Calculator
        {keys.map((item)=>{
            return( <button
            onClick={()=>setInput(input+item)}
            className='bg-black text-white m-2 p-2 rounded-lg'
             key={item}>
                {item}
                </button>)
        })}
<button onClick={()=>setInput('')}>AC</button>
<button onClick={()=>setInput(eval(input))}>=</button>

    </div>
  )
}

export default Calculator 