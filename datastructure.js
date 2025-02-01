[3,4,5,6,7]


EVENT LOOP
-> code execution, executing queued subtasks
:callstack: 
LIFO 
   functions:
   function second(){
     console.log("hello world")
    }
   function first(){
    console.log("hello world")
   } 
   first()
   second()


:callback queue 
 FIFO
 ->   first() is enqueued
 ->   second() is enqueued