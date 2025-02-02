'use client'
import React, { useState, useEffect } from "react";

const Rps = () => {
  const [userPick, setUserPick] = useState('');
  const [compPick, setCompPick] = useState('');
  const [winner, setWinner] = useState('');
  const [userWins, setUserWins] = useState(0);
  const [compWins, setCompWins] = useState(0);
  const [draws, setDraws] = useState(0);
  const names = ["Rock", "Paper", "Scissor"];

  const computerSelection = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    setCompPick(names[randomNumber]);
  };

  const userSelection = (item) => {
    setUserPick(item);
    computerSelection(); 
  };

  const checkWinner = () => {
    if (compPick === userPick) {
      setWinner('Draw');
      setDraws((prev) => prev + 1);
    } else if (
      (userPick === 'Rock' && compPick === 'Scissor') ||
      (userPick === 'Paper' && compPick === 'Rock') ||
      (userPick === 'Scissor' && compPick === 'Paper')
    ) {
      setWinner('User');
      setUserWins((prev) => prev + 1);
    } else {
      setWinner('Computer');
      setCompWins((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (userPick && compPick) {
      checkWinner();
    }
  }, [userPick, compPick]);

  const resetGame = () => {
    setUserPick('');
    setCompPick('');
    setWinner('');
		setCompWins(0)
		setUserWins(0)
		setDraws(0)
  };

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-8">Rock Paper Scissors</h1>

      <div className="flex gap-6 mb-8">
        {names.map((item, id) => (
          <button
            key={id}
            onClick={() => userSelection(item)}
            className="w-32 h-32 bg-white/10 rounded-lg flex items-center justify-center text-4xl hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {item === 'Rock' ? '🪨' : item === 'Paper' ? '📄' : '✂️'}
          </button>
        ))}
      </div>

      <div className="bg-white/10 p-6 rounded-lg shadow-lg text-center mb-8">
        <div className="text-2xl mb-4">
          <p>You Picked: <span className="font-bold">{userPick}</span></p>
          <p>Computer Picked: <span className="font-bold">{compPick}</span></p>
        </div>
        <div className="text-3xl font-bold">
          {winner && (winner === 'Draw' ? 'It\'s a Draw!' : `${winner} Wins!`)}
        </div>
      </div>

      <div className="bg-white/10 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Scoreboard</h2>
        <div className="flex gap-8">
          <div>
            <p className="text-xl">User Wins</p>
            <p className="text-3xl font-bold">{userWins}</p>
          </div>
          <div>
            <p className="text-xl">Computer Wins</p>
            <p className="text-3xl font-bold">{compWins}</p>
          </div>
          <div>
            <p className="text-xl">Draws</p>
            <p className="text-3xl font-bold">{draws}</p>
          </div>
        </div>
      </div>

      {winner && (
        <button
          onClick={resetGame}
          className="mt-8 px-6 py-3 bg-white/10 rounded-lg text-xl hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Play Again
        </button>
      )}
    </div>
  );
};

export default Rps;