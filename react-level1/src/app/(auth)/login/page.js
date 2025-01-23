import React from "react";

const Login = () => {
  return (
    <div className="h-screen bg-white flex justify-center  p-4 gap-2 items-center">
      <div className="bg-white flex-col justify-center items-center w-3/6 p-10 rounded-2xl shadow-xl border-gray-100 border ">
        <div>
          <h1 className="text-gray-950 font-extrabold text-6xl text-center">
            Login
          </h1>
        </div>
        <form className="flex flex-col justify-center items-center mt-8">
          <div className="mt-1 mb-3">
            <input
              placeholder="Email"
              className="text-black text-2xl p-2 shadow border-gray-900 focus:outline-none focus:border-b "
            />
          </div>
          <div className="mt-1 mb-3">
            <input
              type="password"
              placeholder="Password"
              className="text-black text-2xl p-2 shadow border-gray-900 focus:outline-none focus:last:border-b"
            />
          </div>
          <button className="mt-3 p-2 text-2xl bg-blue-500 rounded-lg focus:ring-2 hover:opacity-95 border-none w-[15rem] focus:ring-blue-400 hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
      <div className="bg-white-300 w-3/6 h-[290px] p-1 flex justify-center items-center">
      <p className="text-black text-4xl font-semibold"><span className="text-blue-600">Welcome back!</span> we are gald to have you back.</p>
      </div>
    </div>
  );
};

export default Login;

//rafce
