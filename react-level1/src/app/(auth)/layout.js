import Image from 'next/image'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <nav className='bg-slate-500 h-10 p-1'>
        <Image src="/next.svg" width={80} height={12} alt='logo' className=' mx-3 p-2 border rounded-md bg-white'></Image>
      </nav>
      {children}
    </div>
  )
}

export default layout