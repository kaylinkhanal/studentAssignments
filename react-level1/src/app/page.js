import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex ">

          <div className="mx-auto flex flex-col items-center justify-center w-full">
            <form className="p-10 space-y-4 ">
              <h1 className="text-3xl font-bold ">
                Login
              </h1>
              <div className="flex gap-4 items-center justify-between">
                <label>
                  Email:
                </label>
                <input type="text" placeholder="Enter your email" className="border rounded-md py-4 px-5"/>
              </div>
              <div className="flex gap-4 items-center justify-between">
                <label>
                  Password:
                </label>
                <input type="password" placeholder="Enter your Password" className="border rounded-md py-4 px-5"/>
              </div>
              <button type="submit" className="py-2 px-4 rounded-full bg-blue-600 text-white">
                Submit
              </button>
            </form>
          </div>
      
      <div className="bg-blue-500 w-full "/>
    </div>
  );
}
