'use client'
import { Calendar } from '@/components/ui/calendar'
import { Trash2 } from 'lucide-react'
import React, { useRef, useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [date, setDate] = useState(new Date())
    const taskRef = useRef(null)
    const assigneeRef = useRef(null)

    const handleAddTodo = () => {  
        if (taskRef.current.value.trim() !== '' && assigneeRef.current.value.trim() !== '') {
            setTodos([...todos, { task: taskRef.current.value, assignee: assigneeRef.current.value, date: date }])
            taskRef.current.value = '' // Clear the input field
            assigneeRef.current.value = '' // Clear the assignee field
        }
    }

    // Function to delete a specific todo item
    const handleDeleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index))  
    }

    return (
        <div className='max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg'>
            {/* Calendar component for selecting a date */}
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
            />
          
            <div className='text-center mb-4 flex justify-center'>
                <h1 className='text-3xl font-extrabold text-blue-600'>Todo</h1>
                <h1 className='text-3xl font-extrabold text-yellow-400'>List</h1>
            </div>
        
            <input className='shadow bg-gray-100 font-bold py-3 px-20 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                type="text" placeholder="Enter a task" ref={taskRef} />
          
            <input className='shadow bg-gray-100 font-bold py-3 px-20 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                type="text" placeholder="Assignee" ref={assigneeRef} />
             <button onClick={handleAddTodo} className='bg-blue-400 hover:bg-blue-500 rounded-lg font-bold m-2 p-3'>
                Add Todo
            </button>
            <button onClick={() => setTodos([])} className='bg-yellow-400 hover:bg-yellow-500 m-2 p-3 rounded font-bold'>
                Clear All
            </button>
           
            <div>
                {todos.map((item, index) => (
                    <div key={index} className='flex items-center justify-between m-2 p-2 shadow-md bg-gray-100 rounded'>
                        {/* Display task, assignee, and date */}
                        <span >{item.task} - {item.assignee} - {item.date instanceof Date? item.date.toLocaleDateString() : item.date}</span>
                        {/* Delete button for each todo */}
                        <Trash2 className="cursor-pointer text-blue-500 hover:text-yellow-400" onClick={() => handleDeleteTodo(index)} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Todo




