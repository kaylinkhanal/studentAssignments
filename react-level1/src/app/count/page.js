'use client'
import React, { use, useState } from 'react'
//state in React

const Count = () => {
  let [a,setA]=useState(10)
  const changeCount=(changeType)=>{
    setA(changeType=='inc'?a+1:a-1)
    switch(changeType){
      case'inc':
      setA(a+1)
      case'dec':
      setA(a-1)
      case'reset':
      setA(0)
    }
  }
  return (
   
    <div> 
      <button onClick={()=>changeCount('dec')}>-</button>
    {a}
    <button onClick={()=>changeCount('inc')}>+</button>
    <button onClick={()=>changeCount('reset')}>reset</button>
    </div>
  )
}

export default Count