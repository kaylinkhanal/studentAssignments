import React from 'react'

const LoginPage = () => {
  return (
    <div className='bg-gray-600 m-40 flex p-5 rounded-2xl'>
    <div className='bg-green-300 rounded-2xl font-serif w-2/4'>
      <h1 className='text-Red-900 text-center text-3xl'>Log-in Page</h1>
      <div className='p-1'>User Name
      <input placeholder="Enter Your e-mail" className="m-3 text-l rounded-md text-red h-8 text-center"></input>
      </div>
      <div className='p-1'>Enter Password
        <input placeholder=" Enter Your password" className="m-3 text-l rounded-md text-red h-8 text-center"></input>
      </div>
      <div className='p-5'>
      <button className="rounded bg-cyan-500 py-1 text-l hover:bg-cyan-200 hover:text-black p-5">Submit</button>
      </div>
    </div>
    <div div className='bg-red-300 rounded-2xl font-serif w-2/4 text-center'>Hello</div>
    </div>
  )
}

export default LoginPage