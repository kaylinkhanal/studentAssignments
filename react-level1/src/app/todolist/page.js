'use client'
import { Trash2 } from 'lucide-react'
import React, { useRef, useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const inputRef = useRef(null)
    const handleAddTodo = ()=>{
        setTodos([...todos, inputRef.current.value])
    }
  return (
    <div>
        <input type='text' placeholder='Enter todo' ref={inputRef}/>
        <button onClick={handleAddTodo}>Add Todo</button>
        {todos.map((item)=>{
            return <p className='m-2 p-2 bg-red-300 rounded'key={item}>{item} <Trash2></Trash2></p>
        })}
    </div>
  )
}

export default TodoList
