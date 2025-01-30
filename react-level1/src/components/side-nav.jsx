"use client";
import {
  ActivitySquare,
  MessageCircle,
  RadioTower,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideNav = () => {
  const navBar = [
    {
      title: "Chat",
      link: "/whatsapp/chat",
      icon: <MessageCircle size={40} color="white" />,
    },
    {
      title: "Status",
      link: "/whatsapp/status",
      icon: <ActivitySquare size={40} color="white" />,
    },
    {
      title: "Communities",
      link: "/whatsapp/communities",
      icon: <UsersRound size={40} color="white" />,
    },
    {
      title: "Channel",
      link: "/whatsapp/channel",
      icon: <RadioTower size={40}  color="white" />,
    },
  ];
  const pathName = usePathname();
  return (
    // <div>
    //     {navBar.map((nav, id)=>{
    //         return (
    //             <div key={id} className={`m-2 p-2 ${pathName === nav.link ? 'bg-gray-500' : null}`}>
    //                 <Link  href={nav.link}>
    //                     {nav.icon}
    //                 </Link>
    //             </div>
    //         )
    //     })}
    // </div>

    <div className="flex flex-col bg-gray-800 w-30 p-4 min-h-screen gap-y-3 fixed top-0 left-0">
      {navBar.map((nav, id) => (
        <Link key={id} href={nav.link}>
          <div
            className={`relative group flex items-center p-2 rounded-lg cursor-pointer 
                        ${pathName === nav.link ? 'bg-purple-400 text-white' : 'hover:bg-gray-600'}`}
          >
            {nav.icon}

            <span
              className="absolute -bottom-5 bg-gray-900 text-white text-sm py-1 px-2 rounded-md 
                          opacity-0 group-hover:opacity-100  transition-all duration-300"
            >
              {nav.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideNav;
