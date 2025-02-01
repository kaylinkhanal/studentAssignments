import Image from "next/image";
import React from "react";

const UserCard = ({ item, setCurrentUserDetails, currentUserDetails }) => {
  let stats = item.status === "online" ? "bg-green-400" : "bg-gray-500";
  const lastMessage =
    item.messages.length > 0 ? item.messages[item.messages.length - 1] : null;
    const selectedUser = currentUserDetails.userId === item.userId ? 'bg-black text-white' : null;
  return (
    <div
      onClick={() => setCurrentUserDetails(item)}
      className={`flex gap-4 my-2 p-2 shadow-md w-full sm:w-[400px] h-[80px] rounded-lg transition duration-100 hover:bg-black hover:text-white ${selectedUser}`}
      key={item.userId}
    >
      <div className="relative">
        <Image
          src={item.profilePicture}
          width={60}
          height={60}
          className="rounded-full"
          alt="Profile Picture"
        />

        <div
          className={`absolute h-3 w-3 ml-[44px] -mt-3 rounded-full ${stats}`}
        ></div>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-sans font-semibold">{item.username}</p>
        <div>
          {lastMessage ? (
            <p key={lastMessage.messageId} className="font-sans text-sm">
              {lastMessage.content}
            </p>
          ) : (
            <p>no messages yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
