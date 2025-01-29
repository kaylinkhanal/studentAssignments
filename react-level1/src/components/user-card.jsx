import Link from 'next/link'
import React from 'react'

const UserCard = () => {
  const navItems=['chat','status','channel','communities']
  return (
    <div>
      { 
      navItems.map((items)=>(){
        return ( <Link href={'/whatsapp/'+ items}>
        {items}
        </Link>
        )
      })}
    </div>
  )
}

export default UserCard