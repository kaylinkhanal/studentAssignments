'use client'
import React,{useEffect,useState} from 'react'

const Calculator = () => {
    const keys = ['1','2','3','4','5','6','7','8','9','0','+','.']-{}
    const [input, setInput]=useState('')
  return (
    <div className='grid grid-cols-3 w-40 m-6 '>
        {input}
        {keys.map((item)=>{
            return( <button 
            onClick={()=> setInput(input+item)}
            className='bg-black text-white m=2 p-2 rounded-lg' key={item}>
                {item}
                </button>)
        })}
       <button className='bg-black text-white m=2 p-2 rounded-lg' onClick={()=>setInput('')}>AC</button>
       
       <button  className='bg-black text-white m=2 p-2 rounded-lg' onClick={()=>setInput(eval(input))}>=</button>
    </div>
  )
}

export default Calculator 
