'use client'
import Link from 'next/link'
import React from 'react'
import { MessageSquare, Circle, Users, Grid } from 'lucide-react' // Import icons

const SideNav = () => {
  const navItems = [
    { name: 'Chat', icon: <MessageSquare size={20} /> },
    { name: 'Status', icon: <Circle size={20} /> },
    { name: 'Channel', icon: <Users size={20} /> },
    { name: 'Communities', icon: <Grid size={20} /> }
  ];

  return (
    <div className='flex flex-col bg-gray-100 p-4 w-56 h-[100%] shadow-md'>
      {navItems.map((item) => (
        <Link 
          key={item.name} 
          href={'/whatsapp/' + item.name.toLowerCase()} 
          className='flex items-center gap-3 p-3 rounded-md hover:bg-gray-200 transition'
        >
          {item.icon}
          <span className="text-sm font-medium">{item.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default SideNav;
