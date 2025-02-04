"use client";
import React, { useEffect, useState } from "react";

const UnClick = () => {
  const [selectedItems, setSelectedItems] = useState("");

  const grids = [
    ["🚈", "✨", "🕔"],
    ["🚍", "🚈", "🕔"],
    ["✨", "👽", "🦏"],
    ["🦏", "🚍", "👽"],
  ];
  const handleClick = (position) => {
    setSelectedItems(position);
  };

  return (
    <div>
      {selectedItems}
      {grids.map((item, id) => {
        return (
          <div className="flex" key={id}>
            {item.map((emoji, idx) => {
              return (
                <div
                  key={idx}
                  onClick={() => handleClick(id + idx.toString())}
                  className="p-2 m-2 shadow-md w-16 h-16 bg-violet-800 text-4xl rounded-lg"
                >
                  {id + idx.toString() === selectedItems && emoji}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default UnClick;
