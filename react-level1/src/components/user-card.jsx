<<<<<<< HEAD
"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils";

const UserCard = ({ user, onClick, isSelected }) => {

  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "bg-emerald-500";
      case "away":
        return "bg-yellow-500";
      case "offline":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 p-2 w-full rounded-lg cursor-pointer hover:bg-[#1f2936]",
        isSelected ? "bg-[#1f2936]" : "bg-transparent"
      )}
    >
      <div className="relative">
        <Avatar>
          <AvatarImage src={user.profilePicture} />
          <AvatarFallback>
            {user.username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span
          className={cn(
            "absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#0f1621]",
            getStatusColor(user.status)
          )}
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <p className="font-medium truncate text-white">{user.username}</p>
          <span className="text-xs text-gray-400">
            {new Date(user.lastSeen).toLocaleTimeString()}
          </span>
        </div>
        <p className="text-sm text-gray-400 truncate">
          {user.status === "online"
            ? "Active now"
            : user.status === "offline"
            ? "Last seen " + new Date(user.lastSeen).toLocaleTimeString()
            : "Away"}
        </p>
      </div>
    </div>
  );
=======
'use client'
import Image from 'next/image'
import React from 'react'

const UserCard = ({item,setCurrentUserDetails,currentUserDetails}) => {
  return (
    <div onClick={()=>setCurrentUserDetails(item)}  className={currentUserDetails?.userId === item.userId ? 'bg-gray-100 flex gap-4 m-2  p-2': 'flex gap-4 m-2  p-2' }>
        <div className="relative ">
          <Image 
            src={item?.profilePicture} 
            width={60} 
            height={60} 
            alt="pp" 
            className="rounded-full relative"  
          />
          {item?.status === 'online' && (
            <div className="bg-green-500 h-3 w-3 rounded-full absolute right-1 bottom-0"></div>
          )}
        </div>
        <div>
        {item?.username}
        </div>

      </div>
  )
>>>>>>> 2041118162b773d4a1af526dcdca211a1f4f9617
}

export default UserCard

