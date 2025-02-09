import React from 'react'

const Login = () => {
  return (
    <div className=' flex'>
      <div className='m-auto flex justify-content-center '>
       <form className="border-2 shadow-2xl rounded-2xl p-8 space-y-5 ">
        <div className="flex gap-4 items-center font-bold justify-between">
       <label for="email">Email:</label>
        <input type="text" placeholder="enter your email" className="border rounded-md py-2 px-3" ></input>
        </div>
        <div className="flex gap-4 items-center font-bold justify-between">
        <label for="password">Password:</label>
        <input type="text" placeholder="enter your password" className="border rounded-md py-2 px-3" ></input>
        </div>
       </form>
      </div>
      <div>

      </div>
        
      
    </div>
    
  )
}

export default Login