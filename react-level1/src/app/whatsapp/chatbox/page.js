"use client"
import ChatHead from "@/components/chatHead";
import ChatUi from "@/components/chatUi";
import UserCard from "@/components/user-card";
import Image from "next/image";
import React, { useState } from "react";

const Chat = () => {
  const [currentUserDetails, setCurrentUserDetails] = useState('');
  let users = [
    {
      userId: "1",
      username: "JohnDoe",
      profilePicture: "https://picsum.photos/1400",
      status: "online",
      lastSeen: "2024-10-27T10:00:00Z",
      messages: [
        {
          messageId: "101",
          senderId: "1",
          receiverId: "2",
          content: "Hey Jane, how are you?",
          timestamp: "2024-10-27T09:50:00Z",
        },
        {
          messageId: "102",
          senderId: "2",
          receiverId: "1",
          content: "I'm good, John! How about you?",
          timestamp: "2024-10-27T09:52:00Z",
        },
      ],
    },
    {
      userId: "2",
      username: "JaneSmith",
      profilePicture: "https://picsum.photos/200",
      status: "offline",
      lastSeen: "2024-10-26T18:30:00Z",
      messages: [
        {
          messageId: "103",
          senderId: "2",
          receiverId: "3",
          content: "Hey Peter, are we still meeting today?",
          timestamp: "2024-10-26T18:00:00Z",
        },
      ],
    },
    {
      userId: "3",
      username: "PeterJones",
      profilePicture: "https://picsum.photos/300",
      status: "online",
      lastSeen: "2024-10-27T10:15:00Z",
      messages: [
        {
          messageId: "104",
          senderId: "3",
          receiverId: "2",
          content: "Yes, let's meet at 5 PM.",
          timestamp: "2024-10-26T18:10:00Z",
        },
      ],
    },
    {
      userId: "4",
      username: "AliceJohnson",
      profilePicture: "https://picsum.photos/400",
      status: "away",
      lastSeen: "2024-10-27T09:45:00Z",
      messages: [
        {
          messageId: "105",
          senderId: "4",
          receiverId: "5",
          content: "Bob, did you finish the report?",
          timestamp: "2024-10-27T08:30:00Z",
        },
      ],
    },
    {
      userId: "5",
      username: "BobWilliams",
      profilePicture: "https://picsum.photos/600",
      status: "offline",
      lastSeen: "2024-10-25T12:00:00Z",
      messages: [
        {
          messageId: "106",
          senderId: "5",
          receiverId: "4",
          content: "Not yet, Alice. I'll send it soon.",
          timestamp: "2024-10-27T08:45:00Z",
        },
      ],
    },
    {
      userId: "6",
      username: "CharlieBrown",
      profilePicture: "https://picsum.photos/700",
      status: "online",
      lastSeen: "2024-10-27T11:00:00Z",
      messages: [
        {
          messageId: "107",
          senderId: "6",
          receiverId: "7",
          content: "Diana, are you coming to the meeting?",
          timestamp: "2024-10-27T10:30:00Z",
        },
        {
          messageId: "108",
          senderId: "7",
          receiverId: "6",
          content: "Yes, I'll be there in 10 minutes.",
          timestamp: "2024-10-27T10:35:00Z",
        },
      ],
    },
    {
      userId: "7",
      username: "DianaPrince",
      profilePicture: "https://picsum.photos/800",
      status: "offline",
      lastSeen: "2024-10-26T20:45:00Z",
      messages: [
        {
          messageId: "109",
          senderId: "7",
          receiverId: "8",
          content: "Hey Ethan, did you check the new project files?",
          timestamp: "2024-10-26T19:30:00Z",
        },
      ],
    },
    {
      userId: "8",
      username: "EthanHunt",
      profilePicture: "https://picsum.photos/900",
      status: "away",
      lastSeen: "2024-10-27T08:30:00Z",
      messages: [
        {
          messageId: "110",
          senderId: "8",
          receiverId: "7",
          content: "Yes, I reviewed them. Looks good!",
          timestamp: "2024-10-26T19:45:00Z",
        },
      ],
    },
    {
      userId: "9",
      username: "FionaGallagher",
      profilePicture: "https://picsum.photos/1000",
      status: "online",
      lastSeen: "2024-10-27T10:50:00Z",
      messages: [
        {
          messageId: "111",
          senderId: "9",
          receiverId: "10",
          content: "George, let's grab some coffee later!",
          timestamp: "2024-10-27T10:00:00Z",
        },
      ],
    },
    {
      userId: "10",
      username: "GeorgeMiller",
      profilePicture: "https://picsum.photos/1300",
      status: "offline",
      lastSeen: "2024-10-24T15:10:00Z",
      messages: [
        {
          messageId: "112",
          senderId: "10",
          receiverId: "9",
          content: "Sounds great, Fiona! See you at 3 PM.",
          timestamp: "2024-10-27T10:05:00Z",
        },
      ],
    },
  ];

  return (
    <div className="flex h-screen">
      <div className="flex flex-col basis-4/12 gap-4 items-center p-2">
        <div className="max-w-[400] min-w-[360]">
          <ChatHead />
        </div>

        <div className="p-2 h-screen overflow-y-auto">
          {users.map((item) => {
            return <UserCard item={item} setCurrentUserDetails={setCurrentUserDetails} currentUserDetails={currentUserDetails}/>;
          })}
        </div>
      </div>

      <div className="basis-8/12">
        <ChatUi currentUserDetails={currentUserDetails}/>
      </div>
    </div>
  );
};

export default Chat;
