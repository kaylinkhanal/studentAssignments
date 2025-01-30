import Image from 'next/image'
import React from 'react'

const UserCard = ({item, setCurrentUser}) => {
  const stats = item.status ? 'bg-green-500' : 'bg-gray-600'
  return (
    <div key={item.id} onClick={()=>setCurrentUser(item)} className='flex flex-col p-2 m-2 border-gray-500 border-1 hover:bg-gray-600 w-96 rounded-lg shadow-md'>
      <div className='flex gap-3 items-center'>
        <div className='relative'>
          <Image src={item.profilePicture} height={50} width={50} alt='image' className='rounded-full' />
          {/* <span className="absolute bottom-0 right-1"><FaCircle size={20} color={item.status ? 'green' : 'gray'}/></span> */}
          <div className={`absolute h-3 w-3 ml-[44px] -mt-3 rounded-full ${stats}`}>

          </div>
        </div>
        
        <div>
          {item.username}
        </div>
      </div>
    </div>
  )
}

export default UserCard