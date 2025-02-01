import { Phone, Video } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ChatUi = ({currentUser}) => {
  return (
 <div className='flex flex-col h-screen w-[840px] bg-gray-100 font-serif fixed top-0 '>
  {currentUser ? (
    <>
      <div className='flex gap-5 items-center p-4 bg-white rounded-lg border'>
        <div>
          <Image 
            src={currentUser.profilePicture} 
            height={50} 
            width={50} 
            alt='profile_image' 
            className='rounded-full'
          />
        </div>

        <div className='flex-1 '>
          <div className='text-xl font-semibold text-gray-800'>
            {currentUser.username}
          </div>
          <div className={`text-sm font-light ${currentUser.status ? 'text-green-500' : 'text-gray-500'}`}>
            {currentUser.status ? 'Online' : 'Offline'}
          </div>
        </div>

        <div className='flex gap-4'>
          <button className='p-2 rounded-full hover:bg-gray-200 transition-colors'>
            <Phone className='w-6 h-6 text-purple-600' />
          </button>
          <button className='p-2 rounded-full hover:bg-gray-200 transition-colors'>
            <Video className='w-6 h-6 text-purple-600 ' />
          </button>
        </div>
      </div>

      <div className='flex-1 overflow-y-auto p-4 rounded-lg'>
        <div className='text-center text-gray-500'>
          Start Your Conversation with {currentUser.username}
        </div>
      </div>

      <div className='bg-white border-t p-2 border-gray-200'>
        <div className='flex items-center gap-2'>
          <input 
            type='text'
            placeholder='Type a message...'
            className='flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none'
          />
          <button className='bg-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 transition-colors'>
            Send
          </button>
        </div>
      </div>
    </>
  ) : (
    <div className='flex justify-center items-center h-screen bg-gray-200 '>
      <div className='text-gray-600 text-lg'>
        Start chatting with friends
      </div>
    </div>
  )}
</div> 

  
  )
}

export default ChatUi