
'use client'
import { ActivitySquare, MessageSquare, RadioIcon, User2, UsersRound } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideNav = () => {
    const pathname = usePathname()
    
    const navItems= [
        {title: 'Chat', link:"/whatsapp/chat", icon: <MessageSquare/> }, 
        {title: 'Status', link:"/whatsapp/status", icon: <ActivitySquare/> }, 
        {title: 'Channel', link:"/whatsapp/channel", icon: <RadioIcon/> }, 
        {title: 'communities', link:"/whatsapp/communities", icon: <UsersRound/> }, 
    ]
  return (
    <div className='flex flex-col gap-4 m-2'>
        {navItems.map((item,id)=> {
            return (
                <Link key={id} className={pathname=== item.link ? 'text-black' : 'text-gray-300'} href={item.link} >
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default SideNav