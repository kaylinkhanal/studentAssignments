"use client";
import React, { useState, useEffect } from "react";

const Flip = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  // Game cards with emojis
  const grid = [
    { icon: "🚈", id: 100 },
    { icon: "✨", id: 101 },
    { icon: "🕔", id: 102 },
    { icon: "🚍", id: 103 },
    { icon: "🚈", id: 100 },
    { icon: "🕔", id: 102 },
    { icon: "✨", id: 101 },
    { icon: "👽", id: 104 },
    { icon: "🦏", id: 105 },
    { icon: "🦏", id: 105 },
    { icon: "🚍", id: 103 },
    { icon: "👽", id: 104 },
  ];

  const handleClick = (iconIndex) => {
    if (
      selectedItems.length < 2 &&
      !selectedItems.includes(iconIndex) &&
      !matched.includes(grid[iconIndex].id)
    ) {
      setSelectedItems([...selectedItems, iconIndex]);
    }
  };

  const resetGame = () => {
    setSelectedItems([]);
    setMatched([]);
    setMoves(0);
  };

  useEffect(() => {
    if (selectedItems.length === 2) {
      setMoves((prev) => prev + 1);
      const [iconOneIndex, iconTwoIndex] = selectedItems;
      const iconOneId = grid[iconOneIndex].id;
      const iconTwoId = grid[iconTwoIndex].id;

      if (iconOneId === iconTwoId) {
        setMatched([...matched, iconOneId]);
        setTimeout(() => {
          setSelectedItems([]);
        }, 1000);
      } else {
        setTimeout(() => {
          setSelectedItems([]);
        }, 1000);
      }
    }
  }, [selectedItems]);

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="font-bold text-7xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
        FlipCard
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-4 text-gray-600 font-medium">
          Moves: {moves}
        </div>

        <div className="grid grid-cols-3 gap-4 w-fit mb-6">
          {grid.map((icons, idx) => (
            <div
              onClick={() => handleClick(idx)}
              key={idx}
              className={`
              w-24 h-24
              flex justify-center items-center
              rounded-xl
              cursor-pointer
              text-3xl
              shadow-md
              transition-all duration-300 ease-in-out
              hover:scale-105
              ${
                matched.includes(icons.id)
                  ? "bg-gradient-to-br from-green-300 to-green-400 transform rotate-0"
                  : selectedItems.includes(idx)
                  ? "bg-gradient-to-br from-blue-300 to-blue-400 transform rotate-0"
                  : "bg-gradient-to-br from-purple-300 to-purple-400 transform rotate-180"
              }
            `}
            >
              <span
                className={`
              transition-all duration-300
              ${
                matched.includes(icons.id) || selectedItems.includes(idx)
                  ? "scale-100 rotate-0"
                  : "scale-0 rotate-180"
              }
            `}
              >
                {(selectedItems.includes(idx) || matched.includes(icons.id)) &&
                  icons.icon}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={resetGame}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg
                   font-medium shadow-lg hover:from-purple-600 hover:to-indigo-600
                   transform transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Reset Game
          </button>
        </div>
      </div>

      {matched.length === grid.length / 2 && (
        <div className="mt-8 text-center">
          <div className="text-3xl font-bold mb-2 text-purple-600">
            🎉 Congratulations! 🎉
          </div>
          <div className="text-xl text-gray-600">You won in {moves} moves!</div>
        </div>
      )}
    </div>
  );
};

export default Flip;
