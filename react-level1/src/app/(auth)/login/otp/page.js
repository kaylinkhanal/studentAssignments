
// -------------using shandcn/ui-----------

import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import React from 'react'

const otp = () => {
  return (
    <div className='text-center'>
   <div className=' font-bold m-5'>
    <p>OTP</p>
    </div>
    <div className="pl-20">
    <InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
    </div>
    
  <div className='m-2 '>
    <Button variant="outline"className="bg-blue-700 text-white w-30" >verify</Button>
  </div>
  </div>
  
  

  )
}

export default otp