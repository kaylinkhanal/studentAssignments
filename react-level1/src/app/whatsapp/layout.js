import SideNav from '@/components/side-nav'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex gap-5'>
        <div>
            <SideNav/>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default layout