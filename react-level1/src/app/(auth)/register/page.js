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
    </div>
  )
}

export default Register

