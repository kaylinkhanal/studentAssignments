"use client"
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react'

const Login = () => {
   const formik = useFormik({
      initialValues: {
        email: '',
        username: '',
        password: '',
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  return (
    <div>
      <div className="flex h-screen w-full items-center justify-center bg-slate-700">
        <div className="rounded-xl sm:m-10 sm:w-[800px] sm:bg-slate-500">
          <form onSubmit={formik.handleSubmit} className="m h-[450px] w-full max-w-[400px] rounded-xl bg-slate-400 p-8 sm:rounded-br-none sm:rounded-tr-none">
            <h2 className='text-2xl text-purple-600 text-center font-bold'>Login</h2>
            <div className="mt-4">
              <label className="text-lg font-bold text-purple-600" htmlFor="email">
                Email:
              </label>
              <input
                className="mb-2 mt-4 w-full rounded-md border-purple-600 p-3 font-semibold text-purple-600 outline-purple-600"
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
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
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
            <div className="mb-1 mt-2 pb-2 text-right">
              <Link href="#" className="font-semibold text-purple-600 hover:text-red-600">forget password</Link>
            </div>
            <button type='submit' className="ease mt-5 w-full rounded-md bg-purple-600 p-3 text-lg font-semibold text-white shadow-2xl transition duration-1000 hover:bg-purple-800">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login