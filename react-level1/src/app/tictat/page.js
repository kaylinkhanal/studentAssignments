"use client";
import React, { useEffect, useState } from "react";

const TicTaeToe = () => {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(""));
  const [move, setMove] = useState("X");
  const [winner, setWinner] = useState(null)
  const [isWon, setIsWon] = useState(false)
  const [isCellClicked, setIsCellClicked] = useState(false)

  const winningIndex = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]

  const handleClick = (index) => {
    const displayBoard = [...gameBoard]
    if(gameBoard[index] === '' && !isWon){
      setIsCellClicked(true)

      displayBoard[index] = move
      setGameBoard(displayBoard)
  
      setMove(move === 'X' ? 'O' : 'X')
    }
  }

  const checkWinner = () => {
    for (let patterns of winningIndex){
      const [a,b,c] = patterns

      if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
        setWinner(gameBoard[a])
        setIsWon(true)
      }
    }
  }

  useEffect(()=>{
    checkWinner()
  },[handleClick])


  const resetGame = ()=>{
    setGameBoard(Array(9).fill(''))
    setWinner(null)
    setIsWon(false)
    setMove('X')
    setIsCellClicked(false)
  }
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center bg-gray-800">
      <div className="flex flex-col justify-center items-center bg-gray-500 p-4 rounded-xl">
      <div className="text-5xl mb-3 font-bold text-slate-300">Tic-Tae-Toe</div>
      {isWon && <div className="text-4xl">Player <span className="text-amber-500 font-mono font-extrabold text-5xl">{winner}</span> Won</div>}

      <div className="grid grid-cols-3 w-fit">
        {gameBoard.map((blankItem, id) => (
          <div
            key={id}
            onClick={()=> handleClick(id)}
            className="w-20 h-20 m-2 p-2 bg-gray-700  rounded-2xl text-white flex justify-center items-center text-4xl font-extrabold cursor-pointer"
          >
            {blankItem}
          </div>
        ))}
      </div>
        <div className="mt-4">
          {
           isCellClicked && <button onClick={()=> resetGame()} className="bg-red-500 p-2 text-white text-lg rounded-lg">Reset Game</button>
          }  
        </div>

      </div>
    </div>
  );
};

export default TicTaeToe;
