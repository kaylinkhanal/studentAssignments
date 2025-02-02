'use client'
import ChatUi from '@/components/chat-ui'
import UserCard from '@/components/user-card'
import React, { useState } from 'react'

const Chat = () => {
  const [currentUserDetails , setCurrentUserDetails] = useState(null)
  const users =  [
        {
          "userId": "1",
          "username": "JohnDoe",
          "profilePicture": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
          "status": "online",
          "lastSeen": "2024-10-27T10:00:00Z" 
        },
        {
          "userId": "2",
          "username": "JaneSmith",
          "profilePicture": "https://example.com/profile2.jpg",
          "status": "offline",
          "lastSeen": "2024-10-26T18:30:00Z"
        },
        {
          "userId": "3",
          "username": "PeterJones",
          "profilePicture": "https://example.com/profile3.jpg",
          "status": "online",
          "lastSeen": "2024-10-27T10:15:00Z"
        },
          {
          "userId": "4",
          "username": "AliceJohnson",
          "profilePicture": "https://example.com/profile4.jpg",
          "status": "away", 
          "lastSeen": "2024-10-27T09:45:00Z"
        },
          {
          "userId": "5",
          "username": "BobWilliams",
          "profilePicture": "https://example.com/profile5.jpg",
          "status": "offline",
          "lastSeen": "2024-10-25T12:00:00Z"
        }
      ]
  return (
    <div className='flex'>
        <div className=''>
            {users.map((item)=>{
                return    <UserCard item={item} key={item.userId} setCurrentUserDetails={setCurrentUserDetails}/>
            })}
         
        </div>
        <div className=''>
            <ChatUi currentUserDetails={currentUserDetails}/>
        </div>
    </div>
  )
}

export default Chat