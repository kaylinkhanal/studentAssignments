'use client'
import Image from 'next/image'
import React from 'react'

const UserCard = ({ item, setCurrentUserId }) => {
  // Format last seen timestamp
  const lastSeenFormatted = new Date(item.lastSeen).toLocaleString();

  return (
    <div 
      onClick={() => setCurrentUserId(item.userId)} 
      className="flex items-center p-3 m-2 rounded-lg shadow-md bg-white cursor-pointer hover:bg-gray-100 transition"
    >
      {/* Profile Picture with Online Indicator */}
      <div className="relative w-12 h-10">
        <Image 
          src={item.profilePicture} 
          width={50} 
          height={50} 
          className="rounded-full" 
          alt={`${item.username}'s profile`}
        />
        
        {item.status === 'online' && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-600 rounded-full border-2 border-white"></div>
        )}
      </div>

      {/* User Details */}
      <div className="ml-3">
        <p className="font-semibold">{item.username}</p>
      
        <p className="text-xs text-gray-500">{item.status === 'online' ? 'Online' : `Last seen: ${lastSeenFormatted}`}</p>
      </div>
    </div>
  );
}

export default UserCard;
