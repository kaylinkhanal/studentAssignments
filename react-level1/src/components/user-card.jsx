import Image from "next/image";
import React from "react";

const ChatCard = ({ user, setCurrentUser, currentUser }) => {
  return (
    // <div onClick={()=> setCurrentUser(user)} className={currentUser?.id === user.id ? 'bg-gray-300 flex gap-4 items-center w-96 p-2 border-1 rounded-md': 'flex gap-4 items-center w-96 p-2 border-1 rounded-md'}>
    //   <div className='relative'>
    //     <Image src={user.profilePicture} height={70} width={70} alt='profile_image' className='rounded-full border-1'/>
    //     <span className={`absolute bottom-1 right-3 h-3 w-3 rounded-full ${user.status ? 'bg-green-500' : 'bg-gray-500'}`} ></span>
    //   </div>
    //   <div className='font-normal text-2xl'>
    //     {user.username}
    //   </div>
    // </div>
    <div
      onClick={() => setCurrentUser(user)}
      className={`flex gap-4 items-center w-96 p-3 rounded-xl cursor-pointer 
              transition-all hover:bg-gray-300 ml-[70px]
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


