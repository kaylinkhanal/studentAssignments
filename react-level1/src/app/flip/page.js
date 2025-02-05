// "use client";
// import React, { useEffect, useState } from "react";

// const flip = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [matched, setMatched] = useState([])
//   const grid = [
//     { icon: "🚈", id: 100 },
//     { icon: "✨", id: 101 },
//     { icon: "🕔", id: 102 },
//     { icon: "🚍", id: 103 },
//     { icon: "🚈", id: 100 },
//     { icon: "🕔", id: 102 },
//     { icon: "✨", id: 101 },
//     { icon: "👽", id: 104 },
//     { icon: "🦏", id: 105 },
//     { icon: "🦏", id: 105 },
//     { icon: "🚍", id: 103 },
//     { icon: "👽", id: 104 },
//   ];
//   const handleClick = (iconIndex) => {
//     if(selectedItems.length < 2 && !selectedItems.includes(iconIndex)){
//         setSelectedItems([...selectedItems, iconIndex])
//     }
//   };
//   useEffect(()=>{
//     if(selectedItems.length === 2){
//         const [iconOneIndex, iconTwoIndex] = selectedItems

//         const iconOneId = grid[iconOneIndex].id
//         const iconTwoId = grid[iconTwoIndex].id

//         if(iconOneId === iconTwoId){
//             alert('Matched')
//             setTimeout(()=>{
//                 setSelectedItems([])
//             },2000)
//             setMatched([...matched, iconOneId])
//         }else{
//             alert('Not Matched')
//             setTimeout(()=>{
//                 setSelectedItems([])
//             },2000)
//         }
//     }
//   },[selectedItems])

//   return (
//     <div className="flex justify-center items-center">
//         {selectedItems}
//       <div className="grid grid-cols-3 justify-center items-center w-fit mt-4">
//         {grid.map((icons, idx) => (
//           <div
//             onClick={()=> handleClick(idx)}
//             key={idx}
//             className=" w-16 h-16 flex justify-center items-center bg-purple-800 m-2 p-2 rounded-xl"
//           >
//             {(selectedItems.includes(idx) && icons.icon) || (matched.includes(icons.id) && icons.icon)}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default flip;

'use client'
import React, { useState, useEffect } from "react";
import { Trophy, Timer, Repeat } from "lucide-react";

const Flip = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      if (!gameComplete) {
        setTimeElapsed(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [gameComplete]);

  const handleClick = (iconIndex) => {
    if (selectedItems.length < 2 && !selectedItems.includes(iconIndex) && !matched.includes(grid[iconIndex].id)) {
      setSelectedItems([...selectedItems, iconIndex]);
    }
  };

  const resetGame = () => {
    setSelectedItems([]);
    setMatched([]);
    setMoves(0);
    setTimeElapsed(0);
    setGameComplete(false);
  };

  useEffect(() => {
    if (selectedItems.length === 2) {
      setMoves(prev => prev + 1);
      const [iconOneIndex, iconTwoIndex] = selectedItems;
      const iconOneId = grid[iconOneIndex].id;
      const iconTwoId = grid[iconTwoIndex].id;

      if (iconOneId === iconTwoId) {
        const newMatched = [...matched, iconOneId];
        setMatched(newMatched);
        if (newMatched.length === grid.length / 2) {
          setGameComplete(true);
        }
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

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 p-4">
      <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2 text-white">
            <Timer className="w-5 h-5" />
            <span>{formatTime(timeElapsed)}</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <Trophy className="w-5 h-5" />
            <span>Moves: {moves}</span>
          </div>
          <button 
            onClick={resetGame}
            className="flex items-center space-x-1 px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors"
          >
            <Repeat className="w-4 h-4" />
            <span>Reset</span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3 p-3 bg-white/5 rounded-xl">
          {grid.map((icons, idx) => (
            <div
              onClick={() => handleClick(idx)}
              key={idx}
              className={`
                w-20 h-20 flex justify-center items-center rounded-xl cursor-pointer
                transition-all duration-300 transform hover:scale-105
                ${matched.includes(icons.id) ? 'bg-green-500' : 'bg-purple-700'}
                ${selectedItems.includes(idx) ? 'bg-purple-500' : ''}
                ${matched.includes(icons.id) || selectedItems.includes(idx) ? 'rotate-0' : 'rotate-180'}
              `}
            >
              <span className={`text-3xl transition-all duration-300 ${matched.includes(icons.id) || selectedItems.includes(idx) ? 'scale-100' : 'scale-0'}`}>
                {(selectedItems.includes(idx) || matched.includes(icons.id)) && icons.icon}
              </span>
            </div>
          ))}
        </div>

        {gameComplete && (
          <div className="mt-6 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">🎉 Congratulations! 🎉</h2>
            <p>You completed the game in {moves} moves and {formatTime(timeElapsed)}!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Flip;
