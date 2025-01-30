"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MoreVertical, Plus, Mic, Send } from "lucide-react"
import { useState } from "react"


const ChatUi = ({ currentUser }) => {
  const [messages, setMessages] = useState([])

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-[#0f1621] text-gray-400">
        <p>Select a user to start chatting</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col flex-1 h-full bg-[#0f1621]">
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800/50">
        <div className="flex items-center gap-3">
          <Avatar >
            <AvatarImage src={currentUser.profilePicture} />
            <AvatarFallback>{currentUser.username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-medium text-white">{currentUser.username}</h2>
            <p className="text-sm text-gray-400">
              {currentUser.status === "online"
                ? "Active now"
                : `Last seen ${new Date(currentUser.lastSeen).toLocaleTimeString()}`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800/50">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800/50">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500">No messages yet</p>
        ) : (
          messages.map((message) => (
            <div key={message.id} className={`flex ${message.senderId === "me" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[70%] rounded-lg px-4 py-2 ${
                  message.senderId === "me" ? "bg-blue-600 text-white" : "bg-[#1f2936] text-white"
                }`}
              >
                <p>{message.content}</p>
                <p className="text-xs text-gray-300 mt-1">{message.timestamp.toLocaleTimeString()}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div  className="p-4 flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white hover:bg-gray-800/50"
        >
          <Plus className="h-5 w-5" />
        </Button>
        <Input
          placeholder="Type a message"
          className="bg-[#1f2936] text-white border-none text-sm placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white hover:bg-gray-800/50"
        >
          <Mic className="h-5 w-5" />
        </Button>
        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-white hover:bg-gray-800/50"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

export default ChatUi

