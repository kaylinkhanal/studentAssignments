import React from "react";
//HOC
const layout = ({ children }) => {
  return (
    <div>
      <header className="w-full bg-blue-500 text-white py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My App</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/login" className="hover:underline">
                  Login
                </a>
              </li>
              <li>
                <a href="/register" className="hover:underline">
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
};

export default layout;
