'use client'
import ChatCard from '@/components/user-card';
import ChatUi from '@/components/chat-ui';
import React, { useState } from 'react'

const Chat = () => {
    const users = [
        {
          id: 1,
          username: "Rohan",
          status: false,
          profilePicture:
            "data:image/png;base64,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",
          lastSeen: "2024-11-22T15:30:00Z",
        },
        {
          id: 2,
          username: "Mohan",
          status: true,
          profilePicture:
            "data:image/jpeg;base64,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",
          lastSeen: "2024-11-22T15:30:00Z",
        },
        {
          id: 3,
          username: "Soham",
          status: false,
          profilePicture:
            "https://www.bbc.co.uk/staticarchive/bd3c7a5288fca0c3e99592504f7f1a976a1b78b1.jpg",
          lastSeen: "2024-11-22T15:30:00Z",
        },
        {
          id: 4,
          username: "Samir",
          status: true,
          profilePicture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpxpz-RYLeitDMP46KejfI30FGSEpfrBwag&s",
          lastSeen: "2024-11-22T15:30:00Z",
        },
        {
          id: 5,
          username: "Ujjwal",
          status: true,
          profilePicture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZRzCOTmTpG-0zKoHeoNr8J-LeI_ihfZO3Q&s",
          lastSeen: "2024-11-22T15:30:00Z",
        },
        {
          id: 6,
          username: "Aayush",
          status: true,
          profilePicture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC8vHRxvTv2WbNZS8tnWMJV8p0aBJs7AyVPA&s",
          lastSeen: "2024-11-22T15:30:00Z",
        },
        {
          id: 7,
          username: "Abdul",
          status: true,
          profilePicture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8Ndh_6Yi1w8G7Yg5iGtCQQVreP5sWLdUbg&s",
          lastSeen: "2024-11-22T15:30:00Z",
        },
        {
          id: 8,
          username: "Ansu",
          status: false,
          profilePicture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlOLBRK-3wEFFeCojWlHou4nooggl5iI2PJQ&s",
          lastSeen: "2024-11-22T15:30:00Z",
        },
        {
          id: 9,
          username: "Sagun",
          status: true,
          profilePicture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToVk-zKI0GVhKjH1Pjn-dvi2xGtnHKtZuY5Q&s",
          lastSeen: "2024-11-22T15:30:00Z",
        },
        {
          id: 10,
          username: "Aaman",
          status: true,
          profilePicture:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBNUwxBGjZK_Ma3Iqoep9IXjwpo20X6YRdOg&s",
          lastSeen: "2024-11-22T15:30:00Z",
        },
      ];

    const [currentUser, setCurrentUser] = useState(null)
  return (
    <div className='flex gap-5'>
        <div>
            {users.map((item)=>{
                return (
                    <ChatCard user={item} key={item.id} setCurrentUser={setCurrentUser} currentUser={currentUser}/>
                )
            })}
        </div>
        <div>
            <ChatUi currentUser={currentUser}/>
        </div>
    </div>
  )
}

export default Chat