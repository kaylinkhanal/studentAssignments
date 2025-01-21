import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div id="login" className="bg-white w-1/2 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-gray-700 text-5xl m-3">login</div>
          <form className="flex flex-col">
            <input placeholder="E-mail" className="m-2 p-4 border-4 rounded-lg"/>
            <input placeholder="Password" className="m-2 p-4 border-4 rounded-lg"/>
          </form>
          <button className="m-2 bg-black p-3 rounded shadow-lg">Submit</button>
        </div>
      </div>
      <div id='background' className="bg-gray-400 w-1/2"></div>
    </div>
    
  )
}
