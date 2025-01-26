import React from "react";
import Image from"next/image";
import HeroIcon from "@/components/hero-icon";
//HOC: higher order component

const layout = ({ children }) => {
  return (
    <div className=" p-40 shadow-xl m-40">
     <HeroIcon width={100}/>
    
      {children}
      

    </div>
  );
};

export default layout;
