'use client'
import { ActivitySquare, MessageSquare, RadioIcon, User2Icon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideNav = () => {
    const pathname=usePathname()
    const navItems= [{title:'chat', link:"/whatsapp/chat",icon: <MessageSquare />},
        {title:'status', link:"/whatsapp/status",icon: <ActivitySquare />},
        {title: 'channel',link:"/whatsapp/channel",icon: <RadioIcon /> } ,
        {title:'communities', link:"/whatsapp/chat",icon: <User2Icon /> }]
  return (
    <div className='flex flex-col'>
        {navItems.map((item,id)=> {
            return (
                <Link key={id} href={item.link} >
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default SideNav