import React from 'react';
import Layout from '../layout';


const LoginPage = () => {
  return (
    <Layout title="Login" description="Sign in to access your account">
      <form className="flex flex-col space-y-5">
        <input
          type="email"
          placeholder="Email"
          className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          Login
        </button>
      </form>
      <div className="text-center mt-4">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className=" hover:underline">
            Register now
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default LoginPage;
