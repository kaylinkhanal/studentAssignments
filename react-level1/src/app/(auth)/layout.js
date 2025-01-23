import React from 'react';

const Layout = ({ children, title, description }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      {/* <div className="flex max-w-3xl w-full bg-white rounded-xl shadow-2xl overflow-hidden"> */}
        <div className="w-2/3 p-8">
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">
            {title}
          </h1>
          <p className="text-center text-gray-600 mb-6 underline">{description}</p>
          {children}
        </div>
        {/* <div className="w-1/3 bg-gradient-to-t from-green-500 to-green-400 flex items-center justify-center min-h-screen">
          <p className="text-white text-lg font-semibold text-center">
            Welcome Back!
          </p>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Layout;
