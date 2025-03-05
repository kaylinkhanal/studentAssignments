"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "cook", isComplete: false, assined: "rahul" },
  ]);
  const [editTask, setEditTask] = useState([]);

  const taskRef = useRef();
  const assignRef = useRef();

  const handleAddTask = () => {

    const newTask  = 
    {
      id: 2
    }
    setTasks(prev => [...prev , taskRef.current?.value])
  };

  const handleDeleteAllTasks = () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Task</h1>
        <div className="flex space-y-2 flex-col">
          <Input ref={taskRef} type="text" placeholder="Task" />

          <Input ref={assignRef} type="text" placeholder="assign member" />

          <Button onClick={handleAddTask}>Add</Button>
          <Button onClick={handleDeleteAllTasks} variant={"destructive"}>
            Delete
          </Button>
        </div>

        <ul className="mt-4">
          {tasks?.map((task) => (
            <div key={task.id}>{task.title}</div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
