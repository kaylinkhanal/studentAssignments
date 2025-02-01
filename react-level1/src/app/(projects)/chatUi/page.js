import { Fullscreen } from "lucide-react";
import Image from "next/image";
import React from "react";

const chatUi = () => {
  const people = [
    {
      userId: "1",
      username: "JohnDoe",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTCjJXob9SGb5tEm1iwtHdjtsAyWN2saerA&s",
      status: "online",
      lastSeen: "2024-10-27T10:00:00Z", // ISO 8601 format
    },
    {
      userId: "2",
      username: "JaneSmith",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQO46zUEgt_VVSIuMh4U9SZnsvWhJjFNr4kA&s",
      status: "offline",
      lastSeen: "2024-10-26T18:30:00Z",
    },
    {
      userId: "3",
      username: "PeterJones",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFt6oGuAfjg8BCGFP1T39VXOc8TssgZx0uyA&s",
      status: "online",
      lastSeen: "2024-10-27T10:15:00Z",
    },
    {
      userId: "4",
      username: "AliceJohnson",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDklVWOFg9uvyQXyhwlHwcU9nOgWctnDNjdA&s",
      status: "away", // Added "away" status
      lastSeen: "2024-10-27T09:45:00Z",
    },
    {
      userId: "5",
      username: "BobWilliams",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM7UQkAvAegx3FdjrmuibXKnTspr7AGfWZcQ&s",
      status: "offline",
      lastSeen: "2024-10-25T12:00:00Z",
    },
  ];

  return (
    <div className="bg-gray-600 h-screen flex flex-col gap-4">
      {people.map((people) => {
        return (
          <div
            className="bg-gray-500 flex flex-row h-16 w-[300] shadow-lg"
            key={people.userId}
          >
            <div className=" flex items-center mr-3">
              <Image
                width={60}
                height={60}
                alt="profile picture"
                src={people.profilePicture}
                className=" rounded-full object-cover"
              />
            </div>

            <div className="flex flex-col w-[150] px-2 gap-1">
              <p className="font-bold font-mono text-lg">{people.username}</p>
              <p className="font-sans text-sm">{people.status}</p>
            </div>

            <div className="flex flex-col justify-center w-[100]">
              <p className="font-semibold font-sans">last seen</p>
              <p className="font-extralight text-xs">{people.lastSeen}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default chatUi;
