"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const SigninForm = () => {
  const SigninSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SigninSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 bg-white shadow-xl rounded-2xl">
        <CardContent>
          <h2 className="text-2xl font-bold text-center mb-6">
            Sign In to BrandX
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Enter your email"
                className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.email}
                </p>
              ) : null}
            </div>
            <div className="mb-4">
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Enter your password"
                className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-sm text-red-500 mt-1">
                  {formik.errors.password}
                </p>
              ) : null}
            </div>
            <Button
              type="submit"
              className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Sign In
            </Button>
            <div className="mt-4 text-center text-sm text-gray-600">
              <span>Don't have an account? </span>
              <a
                href="/signup"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Sign Up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SigninForm;
