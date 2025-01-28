"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col sm:flex-row border-2 border-green-900 border-opacity-40 rounded-md w-full sm:w-[90%] lg:w-[800px]">
        {/* Left Section */}
        <div className="bg-gray-200 flex flex-col flex-1 items-center justify-center p-6 sm:min-w-[320px]">
          <div className="flex flex-col items-center mb-6">
            <p className="font-serif font-bold text-2xl underline mt-6 text-center">
              Login to your account
            </p>
            <p className="font-serif text-sm mb-5 text-center">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-serif font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>

          <form
            className="flex flex-col w-full max-w-[300px]"
            onSubmit={formik.handleSubmit}
          >
            <label htmlFor="email" className="mb-1">
              E-mail*
            </label>
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="samirghimire123@gmail.com"
              className="border-2 border-black rounded-md mb-3 p-2 w-full"
              required
            />

            <label htmlFor="password" className="mb-1">
              Password*
            </label>
            <input
              id="email"
              name="email"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
              className="border-2 border-black rounded-md mb-3 p-2 w-full"
              required
            />

            <Button type="submit" className="bg-blue-600 text-white rounded-md my-4 p-2 hover:bg-blue-700 transition">
              Login
            </Button>
          </form>
        </div>

        {/* Right Section */}
        <div className="bg-teal-200 flex flex-col flex-1 items-center justify-center p-4">
          <p className="font-mono font-semibold text-center text-lg">
            K XA HAJUR, Ahhhh!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
