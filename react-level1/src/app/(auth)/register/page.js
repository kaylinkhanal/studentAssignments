'use client'
import HeroSection from '@/components/hero-section';
import { useFormik } from 'formik';
import React from 'react'

const register = () => {
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          password: '',
          confirmpassword: ''
        },
        onSubmit: values => {
         console.log(values)
        },
      });
  return (
   <div>
        <HeroSection title="Register"/>
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-bold ">User Name</label>
                <input type="text" id="name" name="name" 
                 onChange={formik.handleChange}
                 value={formik.values.name}
                       className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
                       placeholder="enter your full name" required/>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold ">Email</label>
                <input type="email" id="email" name="email" 
                 onChange={formik.handleChange}
                 value={formik.values.email}
                       className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
                       placeholder="example@email.com" required/>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-bold ">Password</label>
                <input type="password" id="password" name="password" 
                 onChange={formik.handleChange}
                 value={formik.values.password}
                       className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
                       placeholder="*******" required/>
            </div>
            <div className="mb-4">
                <label htmlFor="confirm-password" className="block text-sm font-bold ">Confirm Password</label>
                <input type="password" id="confirmpassword" name="confirmpassword" 
                 onChange={formik.handleChange}
                 value={formik.values.confirmpassword}
                       className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" 
                       placeholder="*******" required/>
            </div>
            <div className="flex items-center mb-4">
                <input type="checkbox" name="terms" id="terms"
                       className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                <label htmlFor="terms" className="ml-2 text-sm ">I agree to the <a href="#" className="text-indigo-800 hover:underline">terms and conditions</a>.</label>
            </div>
            <button type="submit" 
                    className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Register
            </button>
        </form>
        <p className="text-center text-sm  mt-6">Already have an account? <a href="#" className="text-indigo-800 font-bold hover:underline">LogIn</a></p>
        
    </div>

  );
}

export default register