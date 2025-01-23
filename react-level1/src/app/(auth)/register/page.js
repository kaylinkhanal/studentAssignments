import React from 'react'

const Register = () => {
  return (
      <div className='h-screen bg-white flex-col justify-center items-center pt-10'>
        <div>
          <h1 className='text-gray-950 font-extrabold text-6xl text-center'>Sign Up</h1>
        </div>
        <form className='flex flex-col justify-center items-center mt-7'>
          <div className='mt-1 mb-3'>
            <input placeholder='Enter you name' className='text-black text-2xl p-2 shadow  border-gray-900 focus:outline-none focus:border-b'/>
          </div>
          <div className='mt-1 mb-3'>
            <input placeholder='Email' className='text-black text-2xl p-2 shadow  border-gray-900 focus:outline-none focus:border-b'/>
          </div>
          <div className='mt-1 mb-3'>
            <input type="password" placeholder='Password' className='text-black text-2xl p-2  shadow border-gray-900 focus:outline-none focus:border-b'/>
          </div>
          <div className='mt-1 mb-3'>
            <input type="password" placeholder='Confirm-Password' className='text-black text-2xl p-2  shadow border-gray-900 focus:outline-none focus:border-b'/>
          </div>
          <button className='mt-3 p-2 bg-blue-500 rounded-lg focus:ring-2 hover:opacity-95 border-none w-[15rem] focus:ring-blue-400 hover:bg-blue-600'>Sign Up</button>
        </form>
      
      </div>
  )
}

export default Register