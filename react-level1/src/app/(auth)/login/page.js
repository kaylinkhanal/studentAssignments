
'use client'
import HeroSection from '@/components/hero-section';
import { useFormik } from 'formik';
import React from 'react'

const login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values)
    },
  });
  return (
  
    <div>
    <HeroSection title="Login"/>
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-bold ">
          Email
        </label>
        <input type="email" id="email" name="email" placeholder="example@email.com" required
         onChange={formik.handleChange}
         value={formik.values.email}
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-900 focus:border-indigo-500"/>      
      </div>


      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-bold ">
          Password
        </label>
        <input type="password" id="password" name="password" placeholder="********" required 
           onChange={formik.handleChange}
           value={formik.values.password}         
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-900"/>

      </div>
      <div className="flex items-center mb-4">
        <input type="checkbox" id="remember" name="remember"
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>

        <label htmlFor="remember" className="ml-2 text-sm ">
          Remember me
        </label>
      </div>
      <button type="submit"
        className=" font-bold w-full bg-indigo-600 text-white py-3 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Login
      </button>
    </form>
    <p className="text-center text-sm mt-6">
      Don't have an account?
      <a href="/register" className="font-bold text-indigo-800 hover:underline">
        Register
      </a>
    </p>
  </div>

  )
}

export default login