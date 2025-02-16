"use client";
import {
  changePosition,
  changeShape,
  incrementHeight,
  incrementLength,
  resetGame,
} from "@/lib/features/squid/squidSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SquidGame = () => {
  const { width, height, backGroundColor, borderRadius, top, left } =
    useSelector((state) => state.game);
  const dispatch = useDispatch();
  const [isOver, setIsOver] = useState(false);
  const [out, setOut] = useState(false)
  const [time, setTime] = useState(0);
  const [currentImage, setCurrentImage] = useState('/back.jpg')

  useEffect(() => {
    if (isOver || out) return;
    
    const imagePicker = setInterval(() => {
      setCurrentImage((prev) => prev === '/back.jpg' ? '/front.jpg' : '/back.jpg')
    }, 4000);


    const timer = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          dispatch(incrementHeight());
          break;
        case "ArrowRight":
          dispatch(incrementLength());
        default:
          break;
      }
    };

    const handleMouseMove = (e) => {
      if(currentImage === '/front.jpg'){
        if(e.clientX || e.clientY){
          setOut(true)
          clearInterval(timer);
          clearInterval(imagePicker)
          return

        }
      }
      const mousePositioin = {
        X: e.clientX,
        Y: e.clientY,
      };
      if (e.clientX === 700) {
        console.log("winnner");
        setIsOver(true);
        clearInterval(timer);
        clearInterval(imagePicker)
        return;
      }

      if (!isOver && !out) {
        setTimeout(() => {
          dispatch(changePosition(mousePositioin));
        }, 200);
      }
    };

    if (!isOver || !out) {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(timer);
      clearInterval(imagePicker)
    };
  }, [isOver, currentImage]);

  const handleReset = () => {
    dispatch(resetGame());
    setIsOver(false);
    setTime(0);
    setCurrentImage('/back.jpg')
    setOut(false)
  };

  return (
    <>
    <div className="bg-slate-400 relative h-screen w-screen flex justify-center">
      <div
        onClick={() => dispatch(changeShape())}
        style={{
          width,
          height,
          backgroundColor: backGroundColor,
          borderRadius,
          position: "absolute",
          top,
          left,
          inset: 0
        }}
      />
      <div className="w-2 h-80 bg-zinc-800 absolute left-[800px] top-4" />
      <div className="absolute left-[900px] top-5">
        <Image 
          src={currentImage}
          height={300} 
          width={200} 
          alt="img" 
          className="shadow-md rounded border-2 border-zinc-700"
        />
      </div>
    </div>

    {(isOver || out) && (
      <div className="flex flex-col justify-center items-center h-screen w-screen fixed top-0 left-0 backdrop-blur bg-zinc-900/95">
        <div className="text-zinc-100 text-9xl font-mono mb-8">
          {isOver ? <span>Won!! </span> : <span>Out</span>}
        </div>
        <div className="text-zinc-200 text-4xl font-mono mb-12">
          Time: {time}s
        </div>
        <div>
          <button
            onClick={() => handleReset()}
            className="px-8 py-4 bg-zinc-800 text-zinc-100 rounded border-2 border-zinc-700 
                     font-mono text-4xl hover:bg-zinc-700"
          >
            Play Again
          </button>
        </div>
      </div>
    )}
  </>
  );
};

export default SquidGame;
