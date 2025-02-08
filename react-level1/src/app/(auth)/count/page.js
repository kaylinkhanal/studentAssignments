'use client'

import React, { useState } from 'react'

export default function Count() {

    let [a,setA] = useState(10);
    const increment = ()=> {
            setA(a+1);
    }
    const decrement = ()=> {
      setA(a-1);
}
  return (
    <div >
      <button onClick={increment} className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white text-xl font-bold rounded-full shadow-md hover:bg-blue-600 active:shadow-inner transition-all duration-300">
  +
</button>
<button onClick={decrement} className=" mt-4 w-12 h-12 flex items-center justify-center bg-blue-500 text-white text-xl font-bold rounded-full shadow-md hover:bg-blue-600 active:shadow-inner transition-all duration-300">
  -
</button>
      <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 text-white text-2xl font-bold rounded-full shadow-lg">
  {a}
</div>

    </div>
  )
}
