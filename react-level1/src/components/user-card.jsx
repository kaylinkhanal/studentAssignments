'use client'
import Image from 'next/image'
import React from 'react'

<<<<<<< HEAD
const UserCard = ({item,setCurrentUserDetails}) => {
  return (
    <div onClick={()=>setCurrentUserDetails(item)} className='m-2 shadow-md p-2 rounded'>
      {item.status == 'online' && <div className='bg-green-500 p-2 rounded text-white'>Online</div>}
      {item.username}
      <Image src={item.profilePicture} width={100} height={100} alt='pp' />
=======
const UserCard = ({item,setCurrentUserDetails,currentUserDetails}) => {
  return (
    <div onClick={()=>setCurrentUserDetails(item)}  className={currentUserDetails?.userId === item.userId ? 'bg-gray-100 flex gap-4 m-2  p-2': 'flex gap-4 m-2  p-2' }>
        <div className="relative ">
          <Image 
            src={item?.profilePicture} 
            width={60} 
            height={60} 
            alt="pp" 
            className="rounded-full relative"  
          />
          {item?.status === 'online' && (
            <div className="bg-green-500 h-3 w-3 rounded-full absolute right-1 bottom-0"></div>
          )}
        </div>
        <div>
        {item?.username}
        </div>

>>>>>>> 2041118162b773d4a1af526dcdca211a1f4f9617
      </div>
  )
}

export default UserCard