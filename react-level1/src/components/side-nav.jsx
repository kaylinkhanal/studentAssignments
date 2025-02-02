import React from 'react'
import Link from 'next/link'

const SideNav = () => {
    const navItems= ['chat', 'status', 'channel' , 'communities']
            return (
                <div className='flex flex-col'>
                {navItems.map((item,id)=> {
                    return (
                        <Link key={id} href={'/whatsapp/'+item} >
                            {item}
                        </Link>
            )
        })}
    </div>
  )
}

export default SideNav