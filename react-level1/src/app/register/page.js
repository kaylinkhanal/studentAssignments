import React from 'react'

const Register = () => {
  return (
    <div>
       <div className="flex h-screen w-full items-center justify-center bg-slate-700">
        <div className="rounded-xl sm:m-10 sm:w-[800px] sm:bg-slate-500">
          <form className="m h-[600px] w-full max-w-[400px] rounded-xl bg-slate-400 p-10 sm:rounded-br-none sm:rounded-tr-none">
            <h2 className='text-2xl text-purple-600 text-center font-bold'>Register</h2>
            <div className="mt-4">
              <label className="text-lg font-bold text-purple-600" htmlFor="email">
                Email:
              </label>
              <input
                className="mb-2 mt-4 w-full rounded-md border-purple-600 p-3 font-semibold text-purple-600 outline-purple-600"
                type="email"
                name="email"
                id="email"
              />
              <label className="text-lg font-bold text-purple-600" htmlFor="username">
                Username:
              </label>
              <input
                className="mb-2 mt-4 w-full rounded-md border-purple-600 p-3 font-semibold text-purple-600 outline-purple-600"
                type="text"
                name="username"
                id="username"
              />
            </div>
            <div className="mt-4">
              <label className="text-lg font-bold text-purple-600" htmlFor="password">
                Password:
              </label>
              <input
                className="mb-2 mt-4 w-full rounded-md p-3 font-semibold text-purple-600 outline-purple-600"
                type="password"
                name="email"
                id="password"
              />
            </div>
            <div className="mb-1 mt-2 pb-2 text-right">
              <a
                href="#"
                className="font-semibold text-purple-600 hover:text-red-600"
              >
                forget password
              </a>
            </div>
            <button className="ease mt-5 w-full rounded-md bg-purple-600 p-3 text-lg font-semibold text-white shadow-2xl transition duration-1000 hover:bg-purple-800">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register