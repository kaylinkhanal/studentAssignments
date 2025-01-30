import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideNav = () => {
  const navItems = ["chat", "status", "channel", "communities"];
  return (
    <div>
      {navItems.map((item) => {
        return (
          <div key={item.id} className="flex flex-col shadow-md rounded-2xl font-semibold text-xl p-4 bg-white text-gray-800 w-full max-w-sm mx-2 mt-4">
            <Link
              href={`/whatsapp/${item}`}
              className="hover:text-blue-500 transition-transform hover:scale-105"
            >
              {item[0].toUpperCase() + item.slice(1)}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SideNav;
