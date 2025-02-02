import React from 'react'

const ChatUi = ({currentUserDetails}) => {
  return (
    <div>
      
      <div>
      {currentUserDetails?.username}
      </div>
      {JSON.stringify(currentUserDetails)}
 
    {currentUserDetails?.lastSeen}
    </div>
  )
}

export default ChatUi