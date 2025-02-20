"use client";
import React, { useRef, useState } from "react";
import { Trash2, Plus, User, CalendarIcon } from 'lucide-react';
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState(new Date())
  const taskRef = useRef(null);
  const labelRef = useRef(null);
  const assigneeRef = useRef(null);

  const names = [" ", "Anybody", "Nobody", "Ram", "Shyam", "Hari", "Krishna", "Gopal", "Rupa"]

  const handelclick = () => {
    if (taskRef.current.value !== '' && labelRef.current.value !== "") {
      setTodos([...todos, {task: taskRef.current.value, label: labelRef.current.value, assignee: assigneeRef.current.value}]);
      taskRef.current.value = "";
      labelRef.current.value = "";
    }
  };

  const deleteTask = (index) => {
    let todosCopy = [...todos]
    todosCopy.splice(index, 1)
    setTodos([...todosCopy])
  }

  return (
    <div className="h-screen w-full bg-violet-200 flex justify-center items-center">
      <div className="flex flex-row gap-3 w-[85%] h-[450] bg-purple-200 shadow-xl shadow-orange-400 rounded-md font-mono p-2 border-t-2 border-black">
        <section className="flex flex-col gap-2 p-2 w-[40%] border-r-2 border-black">
          <div className="flex justify-center font-bold text-2xl underline">Create a task</div>
        
          <div className="">
            <p>label:</p>
            <input
              type="text"
              placeholder="Task Title"
              className="border-2 border-black p-2 rounded-md w-full mb-2"
              ref={labelRef}
              onKeyDown={(e) => (e.key === "Enter") ? handelclick() : null}
            ></input>

            <p>Description:</p>
            <input
              type="text"
              placeholder="Discription of task"
              className="border-2 border-black p-2 rounded-md w-full"
              ref={taskRef}
              onKeyDown={(e) => (e.key === "Enter") ? handelclick() : null}
            ></input>
          </div>
          
          <div className="">
            <p>Assignee:</p>
            <select 
            ref={assigneeRef}
            className="w-full h-8 rounded-md">
              {names.map((name, id) => {
                return (
                  <option key={id}>
                    {name}
                  </option>
                )
              })}
            </select>  
          </div>  

          <div>
            <p>Deadline:</p>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>      

          <div className="flex flex-wrap justify-between mx-6">
            <button
              className="border-2 border-black p-2 rounded-md bg-green-200"
              onClick={() => handelclick()}
            >
              Add Task
            </button>

            <button
              className="border-2 border-black p-2 rounded-md bg-green-200"
              onClick={() => setTodos([])}
            >
              Clear All
            </button>
          </div>
        </section>
        
        <section className="w-[60%] overflow-y-auto">
          <p className="flex justify-center font-bold text-2xl border-b-2 border-black">Tasks</p>
          {todos.map((item, index) => {
            return (
              <div
              key={index} 
              className="flex justify-between p-2 my-2 bg-blue-400 rounded-md border-2 border-black">
                <section className="overflow-x-auto">
                  <p className="font-bold text-xl">{item.label}</p>
                  <p>{item.task}</p>
                </section>

                <section>
                  <div className="flex items-center">{item.assignee}</div>

                  <button className="border-2 border-black bg-red-600 rounded-md p-1"
                  onClick={() => deleteTask(index)}
                  >Delete</button>
                </section>

              </div>
            )}
          )}
        </section>
      </div>
    </div>
  );
};

export default ToDoList;
