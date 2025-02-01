import Image from "next/image";
import React from "react";

const ChatCard = ({ user, setCurrentUser, currentUser }) => {
  return (
      <div
        onClick={() => setCurrentUser(user)}
        className={`flex gap-4 items-center w-96 p-3 rounded-xl cursor-pointer 
                transition-all hover:bg-gray-300 font-serif 
                ${currentUser?.id === user.id ? "bg-gray-300" : "bg-white"}`}
      >
        <div className="relative">
          <Image
            src={user.profilePicture}
            height={70}
            width={70}
            alt="profile_image"
            className="rounded-full border border-gray-200 shadow-md"
          />
          <span
            className={`absolute bottom-1 right-1 h-4 w-4 rounded-full ring-2 ring-white 
                    ${user.status ? "bg-green-500" : "bg-gray-400"}`}
          />
        </div>

        <div className="text-lg font-semibold text-gray-800">{user.username}</div>
      </div>

  );
};

export default ChatCard;


