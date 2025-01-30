import Image from 'next/image'
import React from 'react'

const ChatUi = ({currentUser}) => {
  return (
    // <div>{currentUser?.username}</div>
    <div className="flex flex-col w-auto h-screen p-6 bg-gray-50 shadow-md fixed top-0">
    {/* Chat Header */}
    {currentUser ? (
      <>
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm mb-4">
          <Image
            src={currentUser.profilePicture}
            height={50}
            width={50}
            alt="profile_image"
            className="rounded-full border border-gray-300 shadow-md"
          />
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-800">
              {currentUser.username}
            </h2>
            <p
              className={`text-sm ${
                currentUser.status ? "text-green-600" : "text-gray-500"
              }`}
            >
              {currentUser.status ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 p-4 bg-white rounded-lg overflow-y-auto ">
          <div className="text-center text-gray-500">
            Start chatting with {currentUser.username}
          </div>
        </div>

        {/* Message Input */}
        <div className="flex items-center gap-2 mt-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-3 rounded-lg border focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-600">
            Send
          </button>
        </div>
      </>
    ) : (
      <div className="text-center text-gray-500 min-h-screen flex justify-center items-center">
        <div>
            Select a friend to start chatting
        </div>
      </div>
    )}
  </div>
  
  )
}

export default ChatUi