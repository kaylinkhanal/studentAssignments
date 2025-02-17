import React, { useRef, useState } from 'react'

const Register = () => {
  const [setRegister] = useState([])
  const inputRef = useRef(null)
  const handleRegister = ()=> {
    setRegister([inputRef.current.value])
  }
  return (
    <div>
        <input type='text' placeholder='Enter Username' ref={inputRef}/>
        <input type='text' placeholder='Enter Password' ref={inputRef}/>
        <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register