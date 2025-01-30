import Image from 'next/image'
import React from 'react'

const ChatUi = ({currentUser}) => {
  return (
    <div key={currentUser.id} className='flex gap-5 '>
      <div>
        <Image src={currentUser.profilePicture} width={50} height={50} alt='image' className='rounded-full' />
      </div>
      <div>
        {currentUser.username}
      </div>
    </div>
  )
}

export default ChatUi