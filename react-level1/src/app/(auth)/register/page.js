"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useFormik } from "formik";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="bg-white h-screen flex flex-wrap justify-center items-center">
      <form
        className="bg-gray-300 flex flex-col justify-center items-center shadow-lg rounded-md w-full sm:w-[400px] md:w-[500px] lg:w-[600px] p-6"
        onClick={formik.handleSubmit}
      >
        <div className="flex flex-col items-center mb-6">
          <p className="font-mono font-bold text-2xl underline mt-5">Sign Up</p>
          <p className="font-serif text-sm text-center mb-3">
            or{" "}
            <Link
              href="/login"
              className="font-serif font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              sign in to your account
            </Link>
          </p>
        </div>

        <div className="flex flex-col w-full sm:w-[300px]">
          <label htmlFor="name" className="mb-1">
            Name*
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Samir Ghimire"
            className="border-2 border-black rounded-md p-2 mb-3"
            required
          ></input>

          <label htmlFor="email" className="mb-1">
            E-mail*
          </label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="samirgh123@gmail.com"
            className="border-2 border-black rounded-md p-2 mb-3"
            required
          ></input>

          <label htmlFor="password" className="mb-1">
            Password*
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className="border-2 border-black rounded-md p-2 mb-3"
            required
          ></input>

          <label htmlFor="confirmPassword" className="mb-1">
            Confirm Password*
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            className="border-2 border-black rounded-md p-2 mb-3"
            required
          ></input>

          <Button type="submit" className="bg-blue-600 text-white rounded-md my-4 p-2 hover:bg-blue-700 transition">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
