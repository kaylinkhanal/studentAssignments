'use client'
import ChatUi from '@/components/chat-ui'
import UserCard from '@/components/user-card'
import React, { useState } from 'react'

const Chat = () => {
  const [currentUserId, setCurrentUserId] = useState(null);
  
  const users = [
    {
      userId: "1",
      username: "JohnDoe",
      profilePicture: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      status: "online",
      lastSeen: "2024-10-27T10:00:00Z"
    },
    {
      userId: "2",
      username: "JaneSmith",
      profilePicture: "https://qph.cf2.quoracdn.net/main-qimg-22788d5fe20ce873fbd5564b08d77a43.webp",
      status: "offline",
      lastSeen: "2024-10-26T18:30:00Z"
    },
    {
      userId: "3",
      username: "PeterJones",
      profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcGeo7W_HN9oIlmvDgQZLUjkDa_XCsIFiSQ&s",
      status: "online",
      lastSeen: "2024-10-27T10:15:00Z"
    },
    {
      userId: "4",
      username: "AliceJohnson",
      profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUbxBmNuEWRnSeavusNsXAJQY-tSNCA7Qr_A&s",
      status: "online",
      lastSeen: "2024-10-27T09:45:00Z"
    },
    {
      userId: "5",
      username: "BobWilliams",
      profilePicture: "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
      status: "offline",
      lastSeen: "2024-10-25T12:00:00Z"
    }
  ];

  return (
    <div className='flex h-screen'>
      {/* Sidebar with Users */}
      <div className='bg-gray-100 w-96 min-h-screen  p-4'>
        {users.map((item) => (
          <UserCard key={item.userId} item={item} setCurrentUserId={setCurrentUserId} />
        ))}
      </div>

      {/* Chat UI */}
      <div className='bg-blue-400 flex-1 w-auto h-auto p-10'>
        <ChatUi currentUserId={currentUserId} />
      </div>
    </div>
  );
}

export default Chat;
