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
          "lastSeen": "2024-10-27T10:00:00Z" // ISO 8601 format
        },
        {
          "userId": "2",
          "username": "JaneSmith",
          "profilePicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE6-KsNGUoKgyIAATW1CNPeVSHhZzS_FN0Zg&s",
          "status": "offline",
          "lastSeen": "2024-10-26T18:30:00Z"
        },
        {
          "userId": "3",
          "username": "PeterJones",
          "profilePicture": "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "status": "online",
          "lastSeen": "2024-10-27T10:15:00Z"
        },
          {
          "userId": "4",
          "username": "AliceJohnson",
          "profilePicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLpGh_iVtnRdvFi61zAP5iC8OuwCvuEyK0l9rrbWvob5x0JNwgSSrMsWWFwrt6nT3fhKc&usqp=CAU",
          "status": "away", // Added "away" status
          "lastSeen": "2024-10-27T09:45:00Z"
        },
 
      ]
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-3'>
            {users.map((item)=>{
                return    <UserCard item={item} key={item.userId} setCurrentUserDetails={setCurrentUserDetails} currentUserDetails={currentUserDetails}/>
            })}
        </div>
        <div className='col-span-9'>
            <ChatUi currentUserDetails={currentUserDetails}/>
        </div>
    </div>
  )
}

export default Chat