import Link from 'next/link'
import React from 'react'

const SideNav = () => {
    const navItems= ['chat', 'status', 'channel' , 'communities']
  return (
    <div>
        {navItems.map((item)=> {
            return (
                <Link href={'/whatsapp/'+item} >
                    {item}
                </Link>
            )
        })}
    </div>
  )
}

export default SideNav