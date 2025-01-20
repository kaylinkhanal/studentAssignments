
export default function Home() {
  return (
    <div className="bg-gray-800 h-screen w-screen p-2 inline-flex justify-center items-center">
      <div className="p-2 h-5/6 w-3/6 inline-flex flex-col ">
        <div>
          <h1 className="text-8xl mb-5 text-center font-semibold text-gray-400">Wrioto.com</h1>
        </div>
        <div className="mt-5 inline-flex flex-col">
          <input placeholder="E-mail" className="p-2 text-xl rounded-md text-black h-14"></input>
          <input placeholder="Password" className="mt-2 mb-3 p-2 text-xl rounded-md text-black h-14"></input>
          <button className="rounded bg-cyan-500 py-1 text-xl hover:bg-cyan-200 hover:text-black">Login</button>
        </div>
      </div>
      <div className="bg-gray-750 p-2 h-5/6 w-3/6  flex justify-center items-center rounded-md shadow-sm">
        <p className="text-5xl"><span className="text-red-600">Welcome</span> to login page</p>
      </div>
    </div>
  );
}
