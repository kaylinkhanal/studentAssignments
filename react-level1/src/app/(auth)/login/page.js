"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const login = () => {

  return (

    <div className="flex justify-center items-center">
      <div className="flex flex-col  p-7 my-8 shadow-xl">
        <div>
          <h1 className="font-extrabold text-6xl">Log In</h1>
        </div>
        <div className="mt-5 font-thin text-gray-700">
          Create an account ? 
          <span className="hover:underline hover:text-black">
            <Link href="/register"> Sign Up</Link>
          </span>
        </div>
        <form>
          <div className="mt-2">
            <label htmlFor="email" className="font-bold text-lg">
              Email
            </label>
            <Input
              name='email'
              type="text"
              className="w-[30vw]"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="password" className="font-bold text-lg">
              Password
            </label>
            <Input
              name='password'
              type="password"
              className="w-[30vw]"
              placeholder="Enter your password"
            />
          </div>
          <div className="mt-4">
            <Button type='submit' className="w-[30vw]">Sign In</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
