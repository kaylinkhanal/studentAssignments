"use client"

import { useState } from "react"
import { Search, MoreVertical, Archive, MessageCircle, Paperclip, Smile, Mic, Send } from "lucide-react"
import { Input } from "@/components/ui/input"


export default function WhatsAppWebInterface() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUser, setSelectedUser] = useState(null)
  const [messageInput, setMessageInput] = useState("")

  const users = [
    {
      userId: "1",
      username: "John Doe",
      profilePicture: "/placeholder.svg?height=40&width=40",
      status: "online",
      lastSeen: "2024-10-27T10:00:00Z",
      lastMessage: "Hey, how's it going?",
      messages: [
        { id: 1, text: "Hey, how's it going?", sent: false, timestamp: "10:00 AM" },
        { id: 2, text: "I'm doing well, thanks! How about you?", sent: true, timestamp: "10:05 AM" },
      ],
    },
    {
      userId: "2",
      username: "Jane Smith",
      profilePicture: "/placeholder.svg?height=40&width=40",
      status: "offline",
      lastSeen: "2024-10-26T18:30:00Z",
      lastMessage: "See you tomorrow!",
      messages: [
        { id: 1, text: "Are we still on for tomorrow?", sent: false, timestamp: "Yesterday" },
        { id: 2, text: "Yes, definitely! See you tomorrow!", sent: true, timestamp: "Yesterday" },
      ],
    },
    // ... other users ...
  ]

  const filteredUsers = users.filter((user) => user.username.toLowerCase().includes(searchQuery.toLowerCase()))

  const formatLastSeen = (lastSeen) => {
    const date = new Date(lastSeen)
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)

    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    } else {
      return date.toLocaleDateString([], { weekday: "short" })
    }
  }

  const handleSendMessage = () => {
    if (messageInput.trim() && selectedUser) {
      const newMessage = {
        id: selectedUser.messages.length + 1,
        text: messageInput,
        sent: true,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      selectedUser.messages.push(newMessage)
      setMessageInput("")
      // In a real app, you'd update the state or send to a backend here
    }
  }

  return (
    <div className="flex h-screen bg-[#f0f2f5]">
      {/* Left side - User list */}
      <div className="w-[400px] flex flex-col border-r border-gray-300">
        <div className="bg-[#f0f2f5] p-4 flex items-center justify-between border-b border-gray-300">
          <img
            src="/placeholder.svg?height=40&width=40"
            alt="Your profile"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex space-x-4">
            <button className="text-[#54656f] hover:text-[#3b4a54]">
              <MessageCircle size={24} />
            </button>
            <button className="text-[#54656f] hover:text-[#3b4a54]">
              <MoreVertical size={24} />
            </button>
          </div>
        </div>
        <div className="p-2 bg-white">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#54656f]" size={20} />
            <Input
              type="text"
              placeholder="Search or start new chat"
              className="pl-10 pr-4 py-2 w-full bg-[#f0f2f5] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3b4a54]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <button className="flex items-center w-full p-3 hover:bg-[#f0f2f5] transition-colors">
          <Archive className="text-[#00a884] mr-4" size={24} />
          <span className="text-[#111b21] font-medium">Archived</span>
        </button>
        <div className="flex-1 overflow-y-auto bg-white">
          {filteredUsers.map((user) => (
            <button
              key={user.userId}
              className={`flex items-center w-full p-3 hover:bg-[#f0f2f5] transition-colors border-b border-gray-200 ${selectedUser?.userId === user.userId ? "bg-[#f0f2f5]" : ""}`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="relative flex-shrink-0 mr-3">
                <img
                  src={user.profilePicture || "/placeholder.svg"}
                  alt={user.username}
                  className="h-12 w-12 rounded-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <span className="font-medium text-[#111b21] truncate">{user.username}</span>
                  <span className="text-xs text-[#667781]">{formatLastSeen(user.lastSeen)}</span>
                </div>
                <div className="flex items-center text-sm text-[#667781] truncate">{user.lastMessage}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right side - Messaging area */}
      <div className="flex-1 flex flex-col">
        {selectedUser ? (
          <>
            <div className="bg-[#f0f2f5] p-4 flex items-center justify-between border-b border-gray-300">
              <div className="flex items-center">
                <img
                  src={selectedUser.profilePicture || "/placeholder.svg"}
                  alt={selectedUser.username}
                  className="h-10 w-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h2 className="font-medium text-[#111b21]">{selectedUser.username}</h2>
                  <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-background ${
                  selectedUser.status === "online" ? "bg-green-500" : selectedUser.status === "away" ? "bg-yellow-500" : "bg-gray-500"
                }`}
              />
                  <p className="text-sm text-[#667781]">{selectedUser.status === "online" ? "online" : "offline"}</p>
                </div>
              </div>
              <button className="text-[#54656f] hover:text-[#3b4a54]">
                <MoreVertical size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 bg-[#efeae2]">
              {selectedUser.messages.map((message) => (
                <div
                  key={message.id}
                  className={`max-w-[60%] rounded-lg p-2 mb-2 ${message.sent ? "bg-[#d9fdd3] ml-auto" : "bg-white"}`}
                >
                  <p className="text-[#111b21]">{message.text}</p>
                  <span className="text-xs text-[#667781] float-right mt-1">{message.timestamp}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#f0f2f5] p-3 flex items-center">
              <button className="text-[#54656f] hover:text-[#3b4a54] mr-2">
                <Smile size={24} />
              </button>
              <button className="text-[#54656f] hover:text-[#3b4a54] mr-2">
                <Paperclip size={24} />
              </button>
              <Input
                type="text"
                placeholder="Type a message"
                className="flex-1 bg-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3b4a54]"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button className="text-[#54656f] hover:text-[#3b4a54] ml-2" onClick={handleSendMessage}>
                {messageInput.trim() ? <Send size={24} /> : <Mic size={24} />}
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-[#f0f2f5]">
            <p className="text-[#3b4a54] text-xl">Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  )
}

