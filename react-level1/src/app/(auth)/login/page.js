import { Button } from '@/components/ui/button'
import React from 'react'

const Login = () => {
  return (
    <div className='bg-yellow-200 m-36 p-40'>
      <div className='flex'> Email
        <input placeholder='Enter Your UserName' className='m-3 rounded-md text-red h-8 text-center flex-1'></input>
      </div>
      <div className='flex'> Password
        <input placeholder='Enter Your password' className='m-3 rounded-md text-red h-8 text-center flex-1'></input>
      </div>
      <div className='text-center'>
        <Button>Submit</Button>
      </div>
    </div>
    
  )
}

export default Login

//rafce