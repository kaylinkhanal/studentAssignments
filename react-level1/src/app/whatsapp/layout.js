'use-client'
import SideNav from '@/components/side-nav'
import ChatUi from '@/components/ui/chat-ui'
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