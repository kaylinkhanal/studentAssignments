import HeroSection from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="flex w-[60%] flex-col gap-3">
      <HeroSection title="register"/>
     
      <Input placeholder="Enter your Name" />
      <Input placeholder="Enter your Email" />
      <Input placeholder="Enter your Phone Number" />

      <Button
        className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-lg group
        bg-gradient-to-r from-[#FF7F50] via-[#FFE4B5] to-[#87CEEB]
        text-white font-medium text-sm
        transition-all duration-300 ease-out
        hover:scale-[1.02] active:scale-[0.98]
        shadow-lg hover:shadow-xl
        hover:from-[#FF6B3D] hover:via-[#FFD700] hover:to-[#00BFFF]  text-black"
      >
        Register
      </Button>
      <p className="text-gray-500 text-sm">Already have an account? 
        <Link href="/login">Sign In</Link>instead</p>
    </div>
  );
};

export default Register;
