"use client";
import Image from "next/image";
import React, { useState } from "react";

const ScissorPaperRock = () => {
  const [playerMove, setplayerMove] = useState(null);
  const [computerMove, setComputerMove] = useState(null);

  const winner = () => {
    if (!playerMove || !computerMove) return "Choose a move!";
    if (playerMove === computerMove) return "Tie!";

    if (
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "rock" && computerMove === "scissor") ||
      (playerMove === "scissor" && computerMove === "paper")
    ) {
      return "You Win!!";
    } else {
      return "You Lose!!";
    }
  };

  const playerSelect = (move) => {
    setplayerMove(move);

    let randomNum = Math.ceil(Math.random() * 3);
    let computerSelect =
      randomNum === 1 ? "rock" : randomNum === 2 ? "paper" : "scissor";
    setComputerMove(computerSelect);
  };

  return (
    <div className="flex bg-gray-900 flex-col items-center justify-center h-screen">
      <>
        <section className="flex gap-8">
          <div
            onClick={() => playerSelect("rock")}
            className="m-2 p-2 border-4 border-blue-500 rounded-full bg-white"
          >
            <Image src={"/fist.png"} width={100} height={100} alt={"rock"} />
          </div>

          <div
            onClick={() => playerSelect("paper")}
            className="m-2 p-2 border-4 border-blue-500 rounded-full bg-white"
          >
            <Image src={"/hand.png"} width={100} height={100} alt={"rock"} />
          </div>
        </section>

        <section>
          <div
            onClick={() => playerSelect("scissor")}
            className="m-2 p-2 border-4 border-blue-500 rounded-full bg-white"
          >
            <Image src={"/scissor.png"} width={100} height={100} alt={"rock"} />
          </div>
        </section>

        <section className="flex flex-col items-center justify-center gap-2 text-white h-[100] w-[530]">
          <div className="flex justify-between gap-8 font-mono font-bold text-xl">
            <p>Your Move: {playerMove}</p>
            <p>Computer Move: {computerMove}</p>
          </div>

          <div className="font-bold font-mono text-3xl">
            <p>{winner()}</p>
          </div>
        </section>
      </>
    </div>
  );
};

export default ScissorPaperRock;

