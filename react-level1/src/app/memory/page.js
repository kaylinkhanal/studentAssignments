"use client";
import React, { useEffect, useState } from "react";

const Memory = () => {
  const emoji = [
    { id: 1, emoji: "🐶", matched: false },
    { id: 2, emoji: "🐱", matched: false },
    { id: 3, emoji: "🐭", matched: false },
    { id: 4, emoji: "🦊", matched: false },
    { id: 5, emoji: "🐻", matched: false },
    { id: 6, emoji: "🐼", matched: false },
    { id: 7, emoji: "🐯", matched: false },
    { id: 8, emoji: "🦁", matched: false },
    { id: 9, emoji: "🐮", matched: false },
    { id: 10, emoji: "🐷", matched: false },
    { id: 11, emoji: "🐸", matched: false },
    { id: 12, emoji: "🐵", matched: false },
    { id: 13, emoji: "🐶", matched: false },
    { id: 14, emoji: "🐱", matched: false },
    { id: 15, emoji: "🐭", matched: false },
    { id: 16, emoji: "🦊", matched: false },
    { id: 17, emoji: "🐻", matched: false },
    { id: 18, emoji: "🐼", matched: false },
    { id: 19, emoji: "🐯", matched: false },
    { id: 20, emoji: "🦁", matched: false },
    { id: 21, emoji: "🐮", matched: false },
    { id: 22, emoji: "🐷", matched: false },
    { id: 23, emoji: "🐸", matched: false },
    { id: 24, emoji: "🐵", matched: false },
  ];

  const [clickedItem, setClickedItem] = useState([])

  const handleClick =(item) => {
    
      setClickedItem(item)

  }


  return (
    <div className="bg-zinc-200 h-screen w-full flex flex-col items-center justify-center">
      <div>
        {clickedItem.id}
      </div>

      <div className="grid grid-cols-4 gap-4 w-[450]">
        {emoji.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center justify-center bg-purple-800 m-2 p-2 shadow-xl rounded-lg w-20 h-20 text-6xl"
              onClick={() => handleClick(item)}
            >
              {clickedItem && clickedItem.id === item.id ? item.emoji : ''}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Memory;
