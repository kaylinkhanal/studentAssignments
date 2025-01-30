import Link from 'next/link'
import React from 'react'

const SideNav = () => {
    const navItems = [
        {
            title: "chat",
            icon: "chat",
            link: "/chat"
        },
        {
            title: "user",
            icon: "user",
            link: "/user"
        },
        {
            title: "setting",
            icon: "setting",
            link: "/setting"
        },
    ]
  return (
    <div>
        <h1>SideNav</h1>
        {navItems.map((items,id)=>{return <div key={id} className='flex flex-col'> <Link  href={'/whatsapp/'+items.title}>{items.title} </Link></div>})} 
    </div>
  )
}

export default SideNav