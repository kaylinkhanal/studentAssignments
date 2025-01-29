import SideNav from "@/components/side-nav";
import React from "react";

const layout = ({ childern }) => {
  return (
    <div>
      <SideNav />
      {childern}
    </div>
  );
};

export default layout;
