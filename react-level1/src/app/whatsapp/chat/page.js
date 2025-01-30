'use client'
import UserCard from '@/components/user-card'
import React from 'react'

const Chat = () => {
  return (
    <div className='flex gap-3'>
      <div>
        <UserCard/>
      </div>
      <div>
        <ChatUi/>
      </div>
    </div>
  )
}

export default Chat