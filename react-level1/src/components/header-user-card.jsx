import React from 'react'

const UserCardHeader = () => {
  return (
    <div className='mt-2 font-serif bg-purple-300 p-2 rounded-xl'>
        <div className='flex gap-1'>
            <input 
            type='text'
            placeholder='Search Friends'
            className='p-2 w-full border focus:ring-2 focus:ring-purple-500 focus:outline-none rounded-lg'/>
            <button className='bg-purple-500 text-white px-3 py-[6px] rounded-lg shadow-md hover:bg-purple-600 transition-colors'>
                Search
            </button>
        </div>
        <div className='text-3xl font-serif mt-2'>
            Friends
        </div>
    </div>
  )
}

export default UserCardHeader