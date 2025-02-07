'use client';
import React, { useEffect, useRef, useState } from 'react';

const GuessNumber = () => {
    const [userNum, setUserNum] = useState(null);
    const [compNum, setCompNum] = useState(null); 
    const [message, setMessage] = useState('');   
    const inputNum = useRef(null);

    const random = () => {
        return Math.floor(Math.random() * 10) + 1;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userGuess = Number(inputNum.current.value); 

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            setMessage("Please enter a number between 1 and 10.");
            return;
        }
        setUserNum(userGuess);
        const computerGuess = random();
        setCompNum(computerGuess);
    };

    useEffect(() => {
        if (userNum !== null && compNum !== null) {
            if (userNum < compNum) {
                setMessage(`You guessed ${userNum}. Too Low!`);
            } else if (userNum > compNum) {
                setMessage(`You guessed ${userNum}. Too High!`);
            } else {
                setMessage(`You guessed ${userNum}. Correct!`);
            }

            setUserNum(null);
            setCompNum(null);
            inputNum.current.value = "";
        }
    }, [userNum, compNum]);

    return (
        <div>
            <div>Pick Number Between 1-10</div>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    ref={inputNum}
                    placeholder="Enter Your Answer"
                    className="container w-fit p-2 m-2 border"
                />
                <button type="submit" className="p-2 w-fit border">
                    Submit
                </button>
            </form>
            <div>{message}</div> 
        </div>
    );
};

export default GuessNumber;