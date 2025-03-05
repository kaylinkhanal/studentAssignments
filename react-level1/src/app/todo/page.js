'use client'
import { Calendar } from '@/components/ui/calendar'
import { Library, Trash2 } from 'lucide-react'
import React, { useRef, useState } from 'react'

const Todo = () => {
    const [todos, setTodos] =useState([])
    const [date, setDate] = useState(new Date())
    const taskRef = useRef(null)
    const assigneeRef = useRef(null)
    const handleAddTodo = ()=>{
        setTodos([...todos,{task: taskRef.current.value, assignee: assigneeRef.current.value, date: date}])
    }
  return (
    <div>
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
        />
       Tasks: <input type="text" placeholder='Enter Tasks details' ref={taskRef} />
       Tasks: <input type="text" placeholder='Assignee' ref={assigneeRef} />

        <button onClick={handleAddTodo}>Add Todo</button>
        {todos.map((item)=>{
            return <p className='m-2 p-2 bg-red-300 rounded' key={item}>{item.task} <select><option>{item.assignee} </option></select> <Trash2/> </p>
        })}
        <button onClick={()=> setTodos([])}>Clear all</button>
    </div>
  )
}

export default Todo
//clear all
//clear input on adding





// 1. Component state vs Global state
//     -> within a component
//     -> component state is using useState


//     -> global state 
//     -> without passing props, make states globally accesible




// 2. Flux vs Redux
//     -> Architecture to manage global state
//     -> Flux is a pattern
//     -> Redux is js Library
//     -> Multiple store in flux 
//     -> Single Store
//     -> Redux is based on flux Architecture
//     -> 


// 3. Redux alternatives
// -> recoil, Mobx, justand, jotai


// // REDUX:

// // -> Redux CORE
// // -> Redux Toolkit
// // -> Redux with middlewares: Redux Thunk, Redux Saga, Redux Observable (Rxjs)
// // const [username,setUsername] = useState('ramesh')

// // -> global state


// // -> initial state
// //  {username: 'ramesh'}

// // -> store in redux
// //     #container to hold all the global states
// //     #createSlice

// // -> reducer function
// //    # update old state to new state
// //    # pure function
// //    # 2 arguments: state, action


// // -> action and action types
// //     #changeCounter
// //       #changeCounter/increment
// //       #changeCounter/decrement

// // // action===action_type====reducer

// // -> dispatching action/reducer, useDispatch hook 
// //   #execute reducer in redux store

// // -> useSelector hook
// //  # get state from the global store