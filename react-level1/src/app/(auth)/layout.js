'use client'
import HeroIcon from '@/components/hero-icon'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className=" shadow-lg rounded-lg  w-[50%] p-6">
        <label className='text-gray-800'> </label>
        <HeroIcon />
        
          
          {children}
         
      </div>
    </div>    
   
  )
}

export default layout