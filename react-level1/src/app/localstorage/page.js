'use client'
import React, { useRef, useState } from 'react'

const LocalStorage = () => {
    const [task, setTask] = useState(()=> JSON.parse(localStorage.getItem('task')) || [])
    const text = useRef(null)
    const [isDisplayed, setIsDisplayed] = useState(false)

    const click = ()=>{
        const tasks = [...task, text.current.value]
        setTask(tasks)
        text.current.value = ''
        localStorage.setItem('task', JSON.stringify(tasks))
        // alert('Task Added')

    }
    const getTask = ()=>{
        // console.log(localStorage.getItem('task'));
        // const value  = JSON.parse(localStorage.getItem('task')) || [] 
        // console.log(value);
        setIsDisplayed(true)
    }
  return (
    <div>
        <input type="text" placeholder='Type Here ...' className='border p-2' ref={text}/>
        <button onClick={()=> click()} className='p-2 bg-blue-400 rounded-lg'>Add</button>
        <div>
            <button onClick={()=> getTask()} className='bg-gray-600 p-2 rounded-lg text-white'>Get Task</button>
        </div>
        <div>
            {isDisplayed && task.map((tsk, id)=>(
                <div key={id}>
                    {tsk}
                </div>
            ))}
        </div>
    </div>
  )
}

export default LocalStorage

