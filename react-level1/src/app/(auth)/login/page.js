'use client'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log('Form values:', values);
    },
  });

  return (
    <div className="flex w-[60%] flex-col gap-3">
      <HeroSection title="Login" />

      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
        <div>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
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
          Login
        </Button>
      </form>

      <p className="text-gray-500 text-sm">
        Don't have an account yet?{' '}
        <Link href="/register" className="text-blue-500 hover:underline">
          Sign up
        </Link>{' '}
        instead
      </p>
    </div>
  );
};

export default Login;
