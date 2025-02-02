'use client'
import Image from 'next/image'
import React from 'react'

const UserCard = ({item,setCurrentUserDetails}) => {
  return (
    <div onClick={()=>setCurrentUserDetails(item)} className='m-2 shadow-md p-2 rounded'>
      {item.status == 'online' && <div className='bg-green-500 p-2 rounded text-white'>Online</div>}
      {item.username}
      <Image src={item.profilePicture} width={100} height={100} alt='pp' />
      </div>
  )
}

export default UserCard