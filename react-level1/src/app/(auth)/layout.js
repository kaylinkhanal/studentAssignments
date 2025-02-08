import Image from 'next/image'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='bg-slate-200 p-40'>
{/* <Image src='next.svg' width={50} height={50} alt='' /> */}
      {children}
    </div>
  )
  
}

export default layout
