import { ActivitySquare, MessageSquare, RadioIcon, UserRound } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SideNav = () => {
    const pathname=usePathname()
    const navItems= [
        {title:'chat', link:"/whatsapp/chat",icon:<MessageSquare />}, 
        {title:'status', link:"/whatsapp/status",icon:<ActivitySquare/>},
        {title:'channel', link:"whatsapp/channel", icon:<RadioIcon/>},
        {title:'communities', link:"whatsapp/communities", icon:<UserRound/>},



    ]
  return (
    <div className='flex flex-col'>
        {navItems.map((item,id)=> {
            return (
                <Link key={id} className={pathname===item.link? 'text-white':null} href={'/whatsapp/'+item} >
                    {item}
                </Link>
            )
        })}
    </div>
  )
}

export default SideNav