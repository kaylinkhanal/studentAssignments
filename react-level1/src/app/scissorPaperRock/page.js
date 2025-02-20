// "use client";
// import { Button } from "@/components/ui/button";
// import { RotateCcw } from "lucide-react";
// import Image from "next/image";
// import React, { useState } from "react";

// const ScissorPaperRock = () => {
//   const [playerMove, setplayerMove] = useState(null);
//   const [computerMove, setComputerMove] = useState(null);
//   const [frontName, setFrontName] = useState(false);

//   const winner = () => {
//     if (!playerMove || !computerMove) return "Choose a move!";
//     if (playerMove === computerMove) return "Tie!";

//     if (
//       (playerMove === "paper" && computerMove === "rock") ||
//       (playerMove === "rock" && computerMove === "scissor") ||
//       (playerMove === "scissor" && computerMove === "paper")
//     ) {
//       return "You Win!!";
//     } else {
//       return "You Lose!!";
//     }
//   };

//   const playerSelect = (move) => {
//     setplayerMove(move);

//     let randomNum = Math.ceil(Math.random() * 3);
//     let computerSelect =
//       randomNum === 1 ? "rock" : randomNum === 2 ? "paper" : "scissor";
//     setComputerMove(computerSelect);

//     setFrontName(true);
//   };

//   const getMoveImage = (move) => {
//     switch (move) {
//       case "rock":
//         return (
//           <Image src={"/fist.png"} width={100} height={100} alt={"rock"} />
//         );
//       case "paper":
//         return (
//           <Image src={"/hand.png"} width={100} height={100} alt={"paper"} />
//         );
//       case "scissor":
//         return (
//           <Image
//             src={"/scissor.png"}
//             width={100}
//             height={100}
//             alt={"scissor"}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex bg-gray-900 flex-col items-center justify-center h-screen">
//       <>
//         <section className="flex gap-8">
//           <div
//             onClick={() => playerSelect("rock")}
//             className="m-2 p-2 border-4 border-blue-500 rounded-full bg-white"
//           >
//             <Image src={"/fist.png"} width={100} height={100} alt={"rock"} />
//           </div>

//           <div
//             onClick={() => playerSelect("paper")}
//             className="m-2 p-2 border-4 border-blue-500 rounded-full bg-white"
//           >
//             <Image src={"/hand.png"} width={100} height={100} alt={"rock"} />
//           </div>
//         </section>

//         <section>
//           <div
//             onClick={() => playerSelect("scissor")}
//             className="m-2 p-2 border-4 border-blue-500 rounded-full bg-white"
//           >
//             <Image src={"/scissor.png"} width={100} height={100} alt={"rock"} />
//           </div>
//         </section>

//         <div>
//           {frontName && (
//             <div className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-md z-1000 flex justify-center items-center">
//               <section className="flex flex-col items-center justify-center gap-2 text-white h-[100] w-[600]">
//                 <div className="flex justify-between gap-8 font-mono font-bold text-2xl">
//                   <div>
//                     Your Move:{" "}
//                     <div className="m-2 p-2 border-4 border-blue-500 rounded-full bg-white">
//                       {getMoveImage(playerMove)}
//                     </div>
//                   </div>
//                   <div>
//                     Computer Move:{" "}
//                     <div className="m-2 p-2 border-4 border-blue-500 rounded-full bg-white">
//                       {getMoveImage(computerMove)}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="font-bold font-mono text-5xl">
//                   <p>{winner()}</p>
//                 </div>

//                 <Button className="w-28" onClick={() => setFrontName(false)}>
//                   <RotateCcw />
//                   Retry
//                 </Button>
//               </section>
//             </div>
//           )}
//         </div>
//       </>
//     </div>
//     // <div className="m-2 p-2 border-4 border-blue-500 rounded-full bg-white">{playerMove === "rock" ? <Image src={"/fist.png"} width={100} height={100} alt={"rock"} /> : playerMove === "scissor" ? <Image src={"/scissor.png"} width={100} height={100} alt={"rock"} /> : <Image src={"/hand.png"} width={100} height={100} alt={"rock"} />} </div>
//   );
// };

// export default ScissorPaperRock;

"use client";
import { Button } from "@/components/ui/button";
import { ListRestart, RotateCcw } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ScissorPaperRock = () => {
  const [playerMove, setPlayerMove] = useState(null);
  const [computerMove, setComputerMove] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ player: 0, computer: 0 });

  const determineWinner = () => {
    if (!playerMove || !computerMove) return "Choose a move!";
    if (playerMove === computerMove) return "It's a tie!";

    if (
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "rock" && computerMove === "scissor") ||
      (playerMove === "scissor" && computerMove === "paper")
    ) {
      setScore((prev) => ({ ...prev, player: prev.player + 1 }));
      return "You win!";
    } else {
      setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
      return "Computer wins!";
    }
  };

  const playerSelect = (move) => {
    setPlayerMove(move);

    let randomNum = Math.ceil(Math.random() * 3);
    let computerSelect =
      randomNum === 1 ? "rock" : randomNum === 2 ? "paper" : "scissor";
    setComputerMove(computerSelect);

    setShowResult(true);
  };

  useEffect(() => {
    if (playerMove && computerMove) {
      setResult(determineWinner());
    }
  }, [playerMove, computerMove]);

  const getMoveImage = (move) => {
    switch (move) {
      case "rock":
        return (
          <Image
            src={"/fist.png"}
            width={100}
            height={100}
            alt={"rock"}
            className="object-contain"
          />
        );
      case "paper":
        return (
          <Image
            src={"/hand.png"}
            width={100}
            height={100}
            alt={"paper"}
            className="object-contain"
          />
        );
      case "scissor":
        return (
          <Image
            src={"/scissor.png"}
            width={100}
            height={100}
            alt={"scissor"}
            className="object-contain"
          />
        );
      default:
        return null;
    }
  };

  const playAgain = () => {
    setShowResult(false);
    setPlayerMove(null);
    setComputerMove(null);
  };

  const resetGame = () => {
    setPlayerMove(null);
    setComputerMove(null);
    setScore({ player: 0, computer: 0 });
  };

  return (
    <div className="flex bg-gradient-to-b from-gray-900 to-gray-800 flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold text-white mb-8">
        Rock Paper Scissors
      </h1>

      <div className="text-xl text-white mb-6 flex gap-8">
        <div className="text-center">
          <p className="font-semibold">You</p>
          <p className="text-3xl text-blue-400">{score.player}</p>
        </div>
        <div className="text-center">
          <p className="font-semibold">Computer</p>
          <p className="text-3xl text-red-400">{score.computer}</p>
        </div>
      </div>

      <p className="text-white mb-6">Select your move:</p>

      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <button
          onClick={() => playerSelect("rock")}
          className="transition-transform hover:scale-110 m-2 p-3 border-4 border-blue-500 rounded-full bg-white shadow-lg hover:shadow-blue-500/50"
          aria-label="Select rock"
        >
          <Image
            src={"/fist.png"}
            width={80}
            height={80}
            alt={"rock"}
            className="object-contain"
          />
        </button>

        <button
          onClick={() => playerSelect("paper")}
          className="transition-transform hover:scale-110 m-2 p-3 border-4 border-blue-500 rounded-full bg-white shadow-lg hover:shadow-blue-500/50"
          aria-label="Select paper"
        >
          <Image
            src={"/hand.png"}
            width={80}
            height={80}
            alt={"paper"}
            className="object-contain"
          />
        </button>

        <button
          onClick={() => playerSelect("scissor")}
          className="transition-transform hover:scale-110 m-2 p-3 border-4 border-blue-500 rounded-full bg-white shadow-lg hover:shadow-blue-500/50"
          aria-label="Select scissors"
        >
          <Image
            src={"/scissor.png"}
            width={80}
            height={80}
            alt={"scissors"}
            className="object-contain"
          />
        </button>
      </div>

      <Button
        onClick={() => resetGame()}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
      >
        <ListRestart className="mr-2 h-4 w-4" />
        Reset Game
      </Button>

      {showResult && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center p-4">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full shadow-2xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white text-center mb-6">
              {result}
            </h2>

            <div className="flex justify-between items-center mb-8">
              <div className="text-center">
                <p className="text-blue-400 font-medium mb-2">Your Move</p>
                <div className="m-2 p-2 border-4 border-blue-500 rounded-full bg-white inline-block">
                  {getMoveImage(playerMove)}
                </div>
              </div>

              <div className="text-2xl text-white font-bold">VS</div>

              <div className="text-center">
                <p className="text-red-400 font-medium mb-2">Computer's Move</p>
                <div className="m-2 p-2 border-4 border-red-500 rounded-full bg-white inline-block">
                  {getMoveImage(computerMove)}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={playAgain}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Play Again
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScissorPaperRock;
