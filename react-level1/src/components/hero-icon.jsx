
'use client'
import Image from 'next/image'
import React from 'react'

const HeroIcon = () => {
  return (
    <div> 
     <Image src="/logo.png" width={50} height={50} alt='logo' className='m-4'/>
     <p className="font-bold text-xl" >ABC company</p>
   
   
    </div>
  )
}

export default HeroIcon