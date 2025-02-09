
"use client"

import { Trash, Plus, Clock, Edit } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")
  const [assignee, setAssignee] = useState("")
  const [deadline, setDeadline] = useState("")
  const [isPaused, setIsPaused] = useState(false)
  const [type, setType] = useState("Add")
  const [editId, setEditId] = useState(null)

  const inputRef = useRef(null)

  const addTodo = () => {
    if (input.trim() !== "" && assignee.trim() !== "" && deadline !== "") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: input,
          assignee: assignee,
          deadline: deadline,
          timeLeft: 60 * 60 * 24,
        },
      ])
    } else {
      // For editing existing todo
      const updatedTodos = todos.map((todo) =>
        todo.id === editId
          ? {
              ...todo,
              text: input,
              assignee: assignee,
              deadline: deadline,
            }
          : todo
      )
      setTodos(updatedTodos)
    }
    setInput("")
    setAssignee("")
    setDeadline("")
  }

  const handleEdit = (todo) => {
    setType("Edit")
    setEditId(todo.id)
    setInput(todo.text)
    setAssignee(todo.assignee)
    setDeadline(todo.deadline)
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const clearAll = () => {
    setTodos([])
  }

  useEffect(() => {
    let timer = null
    if (!isPaused) {
      timer = setInterval(() => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => ({
            ...todo,
            timeLeft: Math.max(0, todo.timeLeft - 1),
          }))
        )
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isPaused])

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24))
    const hours = Math.floor((seconds % (3600 * 24)) / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
    return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`
  }

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Todo List</h2>
        </div>
        <div className="mt-8 space-y-6">
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Enter todo"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              ref={inputRef}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <input
              type="text"
              placeholder="Enter Assignee"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <button
              type="button"
              onClick={addTodo}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Plus className="h-5 w-5 mr-2" />
              {type === "Add" ? "Add" : "Update"}
            </button>
          </div>
          {todos.length > 0 && (
            <ul className="bg-white shadow overflow-hidden rounded-md divide-y divide-gray-200">
              {todos.map((todo) => (
                <li key={todo.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                  <div className="space-y-1">
                    <span className="text-sm font-medium text-gray-900">{todo.text}</span>
                    <div className="flex space-x-2 text-xs text-gray-500">
                      <span>Assignee: {todo.assignee}</span>
                      <span>|</span>
                      <span>Deadline: {todo.deadline}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-500 mr-4">{formatTime(todo.timeLeft)}</span>
                    <button
                      type="button"
                      onClick={() => handleEdit(todo)}
                      className="text-red-600 hover:text-red-900 transition-colors duration-200"
                    >
                      <Edit className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteTodo(todo.id)}
                      className="text-red-600 hover:text-red-900 transition-colors duration-200"
                    >
                      <Trash className="h-5 w-5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {todos.length > 0 && (
            <div className="flex justify-between">
              <button
                type="button"
                onClick={togglePause}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isPaused ? "Resume" : "Pause"} Timer
              </button>
              <button
                type="button"
                onClick={clearAll}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Todo
