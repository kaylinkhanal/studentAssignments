<<<<<<< HEAD
"use client"

import { useFormik } from "formik"
import * as Yup from "yup"
import HeroSection from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import React from "react"

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("Phone number is required"),
})
=======

import HeroSection from '@/components/hero-section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'
>>>>>>> a7be178828d83fe8e25a870295f3a141d4d47822


const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log("Form values:", values)
    },
  })

  return (
<<<<<<< HEAD
    <div className="flex w-full max-w-md mx-auto flex-col gap-3">
      <HeroSection title="Register" />

      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
        <div>
          <Input
            id="name"
            name="name"
            placeholder="Enter your Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            aria-label="Name"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            aria-label="Email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your Phone Number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            aria-label="Phone Number"
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.phoneNumber}</div>
          ) : null}
        </div>

        <Button
          type="submit"
          className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-lg group
          bg-gradient-to-r from-[#FF7F50] via-[#FFE4B5] to-[#87CEEB]
          text-white font-medium text-sm
          transition-all duration-300 ease-out
          hover:scale-[1.02] active:scale-[0.98]
          shadow-lg hover:shadow-xl
          hover:from-[#FF6B3D] hover:via-[#FFD700] hover:to-[#00BFFF] text-black"
        >
          Register
        </Button>
      </form>

      <p className="text-gray-500 text-sm text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Sign In
        </Link>{" "}
        instead
      </p>
=======
    <div className='flex w-[50%] flex-col gap-3'>
    <HeroSection title="Register"/>
    <Input placeholder="Enter your Name"/>
    <Input placeholder="Enter your Email"/>
    <Input placeholder="Enter your Phone Number"/>
    <Input placeholder="Enter your password"/>
    <Button className="relative overflow-hidden transition-all duration-300 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400  hover:scale-105 hover:shadow-lg hover:from-orange-400 hover:via-orange-300 hover:to-yellow-300 text-white font-semibold px-6 py-3
      after:absolute after:inset-0 after:bg-white/10 after:opacity-0 after:transition-opacity
      hover:after:opacity-100">
      Register</Button>
    <p className='text-gray-500 text-sm'>Already have an account? 
    <Link href='/login'>Sign In</Link>  instead</p>
>>>>>>> a7be178828d83fe8e25a870295f3a141d4d47822
    </div>
  )
}

export default Register
<<<<<<< HEAD

=======
>>>>>>> a7be178828d83fe8e25a870295f3a141d4d47822
