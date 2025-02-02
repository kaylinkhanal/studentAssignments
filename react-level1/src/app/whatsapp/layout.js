import ChatUi from '@/components/chat-ui'
import SideNav from '@/components/side-nav'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex gap-4'>
        <SideNav/>
        {children}
   
        </div>
  )
}

export default layout
