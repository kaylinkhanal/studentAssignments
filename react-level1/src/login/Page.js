import React, { useRef, useState } from 'react'

const Login = () => {
    const [setLogin] = useState([])
    const inputRef = useRef(null)
    const handleLogin = ()=>{
        setLogin([inputRef.current.value])
    }
  return (
    <div>
        <input type='text' placeholder='Enter username' ref={inputRef}/>
        <input type='text' placeholder='Enter password' ref={inputRef}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  ) 
}

export default Login