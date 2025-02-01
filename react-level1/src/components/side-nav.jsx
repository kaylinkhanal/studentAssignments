"use client";
import {
  ActivitySquare,
  MessageSquare,
  RadioIcon,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideNav = () => {
  const pathName = usePathname();

  const navItems = [
    { title: "Chat", link: "/whatsapp/chatbox", icon: <MessageSquare /> },
    { title: "Status", link: "/whatsapp/status", icon: <ActivitySquare /> },
    { title: "Channel", link: "/whatsapp/channel", icon: <RadioIcon /> },
    {
      title: "Communities",
      link: "/whatsapp/communities",
      icon: <UsersRound />,
    },
  ];
  return (
    <div className="bg-black h-screen">
      {navItems.map((item, id) => {
        return (
          <div className="p-2" key={id}>
            <Link
              
              href={item.link}
              className={
                pathName === item.link ? "text-white" : 'text-gray-500'
              }
            >
              {item.icon}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SideNav;
