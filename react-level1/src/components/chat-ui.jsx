'use client'
import React, { useState } from 'react'

const ChatUi = ({ currentUserId }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, sender: 'You' }]);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full p-4 bg-white shadow-md rounded-lg">
      {currentUserId ? (
        <>
          <div className="flex-1 overflow-y-auto p-2 border-b">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div key={index} className="mb-2 p-2 bg-gray-200 rounded-lg">
                  <strong>{msg.sender}:</strong> {msg.text}
                </div>
              ))
            ) : (
              <p className="text-gray-500">Start the conversation...</p>
            )}
          </div>

          {/* Message Input */}
          <div className="flex items-center gap-2 mt-4">
            <input
              type="text"
              className="flex-1 p-2 border rounded-md"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-center mt-10">Select a user to start chatting</p>
      )}
    </div>
  );
};

export default ChatUi;
