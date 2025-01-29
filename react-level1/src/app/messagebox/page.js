"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit, Ellipsis, SearchIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const MessageBox = () => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const profile = [
    {
      id: 1,
      sender: "John Doe",
      content: "Hey, what's up?",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      sender: "Jane Smith",
      content: "Just chilling, you?",
      image:
        "https://images.pexels.com/photos/7276094/pexels-photo-7276094.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 3,
      sender: "David Lee",
      content: "Nothing much, just browsing.",
      image:
        "https://images.pexels.com/photos/11662088/pexels-photo-11662088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      sender: "Sarah Jones",
      content: "Cool, I'm about to head out.",
      image:
        "https://images.pexels.com/photos/28408585/pexels-photo-28408585/free-photo-of-close-up-portrait-of-a-man-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 5,
      sender: "Michael Brown",
      content: "Have fun!",
      image:
        "https://images.pexels.com/photos/7733268/pexels-photo-7733268.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 6,
      sender: "Emily Davis",
      content: "What are you up to today?",
      image:
        "https://images.pexels.com/photos/8785849/pexels-photo-8785849.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 7,
      sender: "Daniel Wilson",
      content: "Just relaxing at home.",
      image:
        "https://images.pexels.com/photos/18500882/pexels-photo-18500882/free-photo-of-portrait-of-man-with-a-beard-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 8,
      sender: "Olivia Taylor",
      content: "Sounds nice! I wish I could do the same.",
      image:
        "https://images.pexels.com/photos/17477885/pexels-photo-17477885/free-photo-of-man-with-beard.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 9,
      sender: "James Anderson",
      content: "Maybe later tonight?",
      image:
        "https://images.pexels.com/photos/10665321/pexels-photo-10665321.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id: 10,
      sender: "Sophia Clark",
      content: "Definitely!",
      image:
        "https://images.pexels.com/photos/18551080/pexels-photo-18551080/free-photo-of-man-in-eyeglasses.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  return (
        <div>
          <div className="grid sm:grid-cols-12">
            <div className="h-full bg-[#edede9] sm:col-span-4  border-2 border-solid border-gray-500 ">
              <div className="flex px-10 justify-between items-center h-20">
                <h2 className="font-bold text-2xl">Chats</h2>
                <div className="flex gap-5">
                  <Ellipsis className="bg-slate-300 w-10 h-10 rounded-full p-2"></Ellipsis>
                  <Edit className="bg-slate-300 w-10 h-10 rounded-full p-2"></Edit>
                </div>
              </div>

              <div className="mx-8 mt-2 mb-8  flex gap-4 h-10 items-center justify-evenly">
                <Input className="bg-slate-100 rounded-3xl h-12 text-2xl font-semibold"></Input>
                <Button className="px-10 h-12 rounded-3xl mr-2">
                  <SearchIcon></SearchIcon>
                </Button>
              </div>

              <div className="overflow-y-auto h-[calc(100vh-165px)]">
                {profile.map((item) => {
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedUserId(item.id)}
                      className={`h-24 w-full pl-8 flex items-center cursor-pointer ${
                        selectedUserId === item.id ? "bg-[#d6ccc2] " : "bg-[#edede9]"
                      }`}
                    >
                      <Image
                        className="rounded-full h-16 w-16 bg-cover"
                        src={item.image}
                        height={100}
                        width={100}
                        alt="profile image"
                      ></Image>
                      <div className="ml-4">
                        <h2 className="font-bold text-xl">{item.sender}</h2>
                        <p className="font-light text-sm mt-2">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="h-full bg-[#d6ccc2] sm:col-span-8  border-t-2 border-b-2 border-r-2 border-gray-500"></div>
          </div>
        </div>
  );
};

export default MessageBox;