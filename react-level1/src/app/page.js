

export default function Home() {
  return (
    <div className="min-h-screen flex ">

          <div className="mx-auto flex items-center justify-center w-full  ">
            <form className="p-10 space-y-5 ">
              <h1 className="text-3xl font-bold">LogIn</h1>
               
              <div className="flex gap-4 items-center font-bold justify-between">
                <label for="email">Email</label>
                <input type="email" name="email"placeholder="Enter your Email" id="email" className="border rounded-md py-2 px-3"/>
              </div>
              <div className="flex gap-4 items-center font-bold justify-between">
                <label for="pass">Password</label>
                <input type="password" name="password" placeholder="Enter your Password" id="pass" className="border rounded-md py-2 px-3"/>
              </div>

              <button className=" py-1 px-9 rounded-xl bg-green-600 text-white cursor:pointer hover:bg-yellow-400 ">submit</button>
               
            </form>
          </div>
      
      <div className=" mx-auto flex text-center py-64 bg-green-500 w-full hover:bg-yellow-400 ">
        <p className="text-white  text-7xl" > hello welcome to login form</p>
        </div>
    </div>
  );
}