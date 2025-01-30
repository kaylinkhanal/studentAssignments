"use client";

import ChatUi from "@/components/chat-ui";
import { Separator } from "@/components/ui/separator";
import UserCard from "@/components/user-card";
import { useState } from "react";

export const users = [
  {
    userId: "1",
    username: "JohnDoe",
    profilePicture: "/placeholder.svg?height=40&width=40",
    status: "online",
    lastSeen: "2024-10-27T10:00:00Z",
  },
  {
    userId: "2",
    username: "JaneSmith",
    profilePicture: "/placeholder.svg?height=40&width=40",
    status: "offline",
    lastSeen: "2024-10-26T18:30:00Z",
  },
  {
    userId: "3",
    username: "PeterJones",
    profilePicture: "/placeholder.svg?height=40&width=40",
    status: "online",
    lastSeen: "2024-10-27T10:15:00Z",
  },
];

export default function ChatPage() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="flex h-full">
      <div className="w-80 p-4 bg-[#0f1621] border-r border-gray-800/50 space-y-6">
        <h1 className="text-2xl font-semibold text-white">Chat</h1>
        <Separator className="bg-gray-800/50" />
        <div className="space-y-2">
          {users.map((user) => (
            <UserCard
              key={user.userId}
              user={user}
              onClick={() => setSelectedUser(user)}
              isSelected={selectedUser?.userId === user.userId}
            />
          ))}
        </div>
      </div>
      <ChatUi currentUser={selectedUser} />
    </div>
  );
}
