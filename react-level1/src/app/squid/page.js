// "use client";
// import { Button } from "@/components/ui/button";
// import { forward, restart } from "@/lib/features/squid/squidSlice";
// import { Cat, Pizza, Rat, RotateCcw } from "lucide-react";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const Squid = () => {
//   const { margin } = useSelector((state) => state.squid);
//   const dispatch = useDispatch();

//   const [light, setLight] = useState("stop");
//   const [start, setStart] = useState(false);
//   const [eliminate, setEliminate] = useState(false);
//   const [win, setWin] = useState(false);

//   useEffect(() => {
//     if (margin === 810) {
//       setWin(true);
//       setStart(false);
//       dispatch(restart())
//     }
//   }, [margin]);


//   useEffect(() => {
//     if (start) {
//       const change = setInterval(() => {
//         setLight((prevLight) => (prevLight === "stop" ? "go" : "stop"));
//       }, 2000);

//       return () => clearInterval(change);
//     }
//   }, [start, light]);

//   useEffect(() => {
//     if (start) {
//       const handleKeydown = (e) => {
//         if (light === "stop") {
//           setEliminate(true);
//           setStart(false);
//           return;
//         }

//         if (e.key === "ArrowRight") {
//           dispatch(forward());
//         }
//       };
//       window.addEventListener("keydown", handleKeydown);

//       return () => {
//         window.removeEventListener("keydown", handleKeydown);
//       };
//     }
//   }, [start, light]);

//   const playAgain = () => {
//     setStart(true)
//     setWin(false);
//     setEliminate(false)
//     dispatch(restart())
//   }

//   return (
//     <div className="flex flex-col gap-5 items-center justify-center h-screen">
//       <section className="flex flex-col justify-between bg-gray-200 border-2 border-black w-[65%] h-[50%] p-3">
//         <div className="flex items-center gap-2 justify-end">
//           <p>RedLight</p>
//           <div
//             className={`w-8 h-8 rounded-full ${
//               light === "go" ? "bg-green-600" : "bg-red-600"
//             }`}
//           ></div>
//         </div>
//         <div
//           style={{ marginLeft: margin, transition: "all 0.3s ease" }}
//           className="flex justify-between"
//         >
//           <Rat width={100} height={100} />

//           {light === "stop" ? (
//             <Cat width={100} height={100} />
//           ) : (
//             <Pizza width={100} height={100} />
//           )}
//         </div>
//       </section>

//       <section>
//         <Button onClick={() => setStart(true)}>Start</Button>

//         {win && <div className="fixed inset-0 backdrop:blur-sm z-5000 bg-black/60 flex items-center justify-center">
//           <div className="bg-gray-300 size-80 rounded-lg flex flex-col justify-center items-center p-6 gap-7">
//             <p className="font-mono font-bold text-2xl">You Win!</p>
//             <p className="font-serif text-xl font-bold text-red-600">You ate the pizza</p>
//             <Button onClick={() => playAgain()}>
//               <RotateCcw/>
//               Play Again
//             </Button>
//           </div>
//         </div>}

//         {eliminate && <div div className="fixed inset-0 backdrop:blur-sm z-5000 bg-black/60 flex items-center justify-center">
//           <div className="bg-gray-300 size-80 rounded-lg flex flex-col justify-center items-center p-6 gap-7">
//             <p className="font-mono font-bold text-2xl">You Lose!</p>
//             <p className="font-serif text-xl font-bold text-red-600">You got caught by the cat</p>
//             <Button onClick={() => playAgain()}>
//               <RotateCcw/>
//               Play Again
//             </Button>
//           </div>
//         </div>}
//       </section>
//     </div>
//   );
// };

// export default Squid;

"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { forward, restart } from "@/lib/features/squid/squidSlice";
import { Cat, Pizza, Rat, RotateCcw, Play, Volume2, VolumeX } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Squid = () => {
  const { margin } = useSelector((state) => state.squid);
  const dispatch = useDispatch();

  const [light, setLight] = useState("stop");
  const [start, setStart] = useState(false);
  const [eliminate, setEliminate] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    if (margin === 750) {
      setWin(true);
      setStart(false);
      dispatch(restart());
    }
  }, [margin]);

  useEffect(() => {
    if (start) {
      const change = setInterval(() => {
        setLight((prevLight) => (prevLight === "stop" ? "go" : "stop"));
      }, 2000);

      return () => clearInterval(change);
    }
  }, [start, light]);

  useEffect(() => {
    if (start) {
      const handleKeydown = (e) => {
        if (light === "stop") {
          setEliminate(true);
          setStart(false);
          return;
        }

        if (e.key === "ArrowRight") {
          dispatch(forward());
        }
      };
      window.addEventListener("keydown", handleKeydown);

      return () => {
        window.removeEventListener("keydown", handleKeydown);   // Each time light changes, the effect removes the previous event listener and adds a new one with the updated light state.
      };
    }
  }, [start, light]);

  const playAgain = () => {
    setStart(true);
    setWin(false);
    setEliminate(false);
    dispatch(restart());
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Rat Race</h1>
        </div>

        {/* Game Arena */} {/* used card and cardContent because it provides inhanched ui and buildin paddings etc */}
        <Card className="bg-gray-100 border-4 border-gray-700 overflow-hidden">
          <CardContent className="p-6 h-96 relative">
            {/* Lights */}
            <div className="absolute top-4 right-4 flex items-center gap-3 bg-gray-800 p-3 rounded-full">
              <span className="text-white font-medium">Signal</span>
              <div
                className={`w-6 h-6 rounded-full transition-colors duration-300 ${
                  light === "go" ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
            </div>

            {/* Game Characters */}
            <div className="h-full flex items-end pb-8">
              <div
                style={{ marginLeft: margin, transition: "all 0.3s ease" }}
                className="flex items-center gap-2"
              >
                <Rat className="w-16 h-16 text-gray-700" />
              </div>
              <div className="ml-auto">
                {light === "stop" ? (
                  <Cat className="w-20 h-20 text-gray-800" />
                ) : (
                  <Pizza className="w-16 h-16" />
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Controls */}
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            onClick={() => setStart(true)}
            disabled={start}  // cannot click the start button once clicked
            className="bg-green-600 hover:bg-green-700"
          >
            <Play className="mr-2 h-4 w-4" />
            Start Game
          </Button>
          <Button
            size="lg"
            onClick={playAgain}
            variant="outline"
            className="text-black border-white hover:bg-gray-700"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>

        {/* Instructions */}
        <Card className="bg-gray-700 text-white">
          <CardContent className="p-4">
            <h2 className="font-semibold mb-2">How to Play:</h2>
            <p>1. Press Start to begin</p>
            <p>2. Use the RIGHT ARROW key to move when the light is GREEN</p>
            <p>3. DON'T MOVE when the light is RED or the cat will catch you!</p>
            <p>4. Reach the pizza to win!</p>
          </CardContent>
        </Card>

        {/* Modals */}
        {(win || eliminate) && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center">
            <Card className="w-96 p-6">
              <CardContent className="flex flex-col items-center gap-6">
                <h2 className="text-3xl font-bold">
                  {win ? "You Win! 🎉" : "Game Over! 😿"}
                </h2>
                <p className="text-xl text-center">
                  {win
                    ? "Congratulations! You got the pizza!"
                    : "Oh no! The cat caught you!"}
                </p>
                <Button size="lg" onClick={playAgain}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Play Again
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Squid;
