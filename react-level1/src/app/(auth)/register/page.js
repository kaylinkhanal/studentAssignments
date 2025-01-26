"use client";
import HeaderTitle from "@/components/headerTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import * as yup from "yup";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      fullName: yup
        .string()
        .matches(
          /^[A-Za-z]+$/,
          "Username must contain only letters (no numbers or special characters)"
        )
        .max(25, "Must be 15 characters or less")
        .min(3, "Must be 3 characters or more")
        .required("Required"),
      email: yup.string().email("Invalid email address").required("Required"),
      password: yup
        .string()
        .min(8, "Must contain 8 or more character")
        .matches(/[a-z]/, "Must contain one lowerCase letter")
        .matches(/[A-Z]/, "Must contain one UpperCase letter")
        .matches(/\d/, "Must contain one Number")
        .matches(/[!@#$%^&*()]/, "Must contain one Special character")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="grid grid-cols-2 gap-6 justify-center items-stretch ">
      <div className="flex flex-col border-l-4 ml-5 pl-20 my-8 rounded-2xl border-gray-800">
        <div>
          <HeaderTitle title="Sign Up"/>
        </div>
        <div className="mt-5 font-thin text-gray-700">
          Already have an account ?{" "}
          <span className="hover:underline hover:text-black">
            <Link href="/login">Log In</Link>
          </span>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-3">
            <label htmlFor="name" className="font-bold text-lg">
              Name
            </label>
            <Input
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              onBlur={formik.handleBlur}
              className="w-[30vw]"
              placeholder="Enter your full name"
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className='text-red-500'>{formik.errors.fullName}</div>
            ) : null}
          </div>
          <div className="mt-2">
            <label htmlFor="email" className="font-bold text-lg">
              Email
            </label>
            <Input
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              className="w-[30vw]"
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='text-red-500'>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mt-2">
            <label htmlFor="password" className="font-bold text-lg">
              Password
            </label>
            <Input
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              type="password"
              className="w-[30vw]"
              placeholder="Enter your password"
            />
            {formik.touched.password && formik.errors.password ? (
            <div className='text-red-500'>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="mt-2">
            <label htmlFor="confirmPassword" className="font-bold text-lg">
              Confirm Password
            </label>
            <Input
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              type="password"
              className="w-[30vw]"
              placeholder="Enter your password again"
            />
          </div>
          <div className="mt-4">
            <Button type="submit" className="w-[30vw]">
              Sign Up
            </Button>
          </div>
        </form>
      </div>

      <div className="border-l-4 flex flex-col justify-center items-center my-8 rounded-2xl border-gray-800">
        <div className="font-mono font-bold text-5xl">Let's Stay Connected</div>
        <div className="font-mono font-bold text-5xl">
          To <span className="text-orange-900">EveryOne</span>
        </div>
      </div>
    </div>

  );
};

export default Register;
