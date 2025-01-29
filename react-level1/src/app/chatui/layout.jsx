import ChatSidebar from '@/components/ChatSidebar';
import React from 'react'

const layout = ({children}) => {
  return (
      <main>
      <ChatSidebar />
        {children}
      </main>
  );
}

export default layout