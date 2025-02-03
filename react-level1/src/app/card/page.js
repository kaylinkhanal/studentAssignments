'use client';
import React, { useState } from 'react';

const Cards = () => {
    const [userSelection, setUserSelection] = useState(null);
    const [compSelection, setCompSelection] = useState(null);
    const [result, setResult] = useState(null);
    const [userWins, setUserWins] = useState(0); 
    const [computerWins, setComputerWins] = useState(0); 

    const cardOptions = [
        { cardName: "A", level: 13 },
        { cardName: "2", level: 1 },
        { cardName: "3", level: 2 },
        { cardName: "4", level: 3 },
        { cardName: "5", level: 4 },
        { cardName: "6", level: 5 },
        { cardName: "7", level: 6 },
        { cardName: "8", level: 7 },
        { cardName: "9", level: 8 },
        { cardName: "10", level: 9 },
        { cardName: "J", level: 10 },
        { cardName: "Q", level: 11 },
        { cardName: "K", level: 12 }
    ];

    const userClickHandle = (cardName) => {
        setUserSelection(cardName);
        const compCardName = computerSelection();
        winner(cardName, compCardName);
    };

    const computerSelection = () => {
        const randomNum = Math.floor(Math.random() * cardOptions.length);
        const compCardName = cardOptions[randomNum].cardName;
        setCompSelection(compCardName);
        return compCardName;
    };

    const winner = (userCardName, compCardName) => {
        const userCard = cardOptions.find((card) => card.cardName === userCardName);
        const compCard = cardOptions.find((card) => card.cardName === compCardName);

        if (userCard.level > compCard.level) {
            setResult('User Won');
            setUserWins((prev) => prev + 1);
        } else if (userCard.level < compCard.level) {
            setResult('Computer Won');
            setComputerWins((prev) => prev + 1);
        } else {
            setResult("It's a Draw");
        }
    };

    const resetGame = () => {
        setUserSelection(null);
        setCompSelection(null);
        setResult(null);
        setUserWins(0);
        setComputerWins(0);
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col justify-center items-center'>
            <h1 className='text-5xl mb-6 font-extrabold'>Start Your Gambling Journey</h1>

            <div className='flex justify-between w-full max-w-2xl '>
                <div className='text-center'>
                    <p className='text-lg font-semibold text-gray-700'>Your Pick</p>
                    <p className='text-2xl font-bold text-blue-600'>{userSelection || "—"}</p>
                </div>
                <div className='text-center'>
                    <p className='text-lg font-semibold text-gray-700'>Computer Pick</p>
                    <p className='text-2xl font-bold text-purple-600'>{compSelection || "—"}</p>
                </div>
            </div>

            <div className='text-center mb-2'>
                <p className='text-3xl font-bold text-gray-800'>{result || "Make your move!"}</p>
            </div>

            <div className='flex justify-between w-full max-w-md mb-3'>
                <div className='text-center'>
                    <p className='text-lg font-semibold text-gray-700'>Your Wins</p>
                    <p className='text-2xl font-bold text-blue-600'>{userWins}</p>
                </div>
                <div className='text-center'>
                    <p className='text-lg font-semibold text-gray-700'>Computer Wins</p>
                    <p className='text-2xl font-bold text-purple-600'>{computerWins}</p>
                </div>
            </div>

            <div className='grid grid-cols-4 gap-4 max-w-lg'>
                {cardOptions.map((card, id) => (
                    <div
                        key={id}
                        onClick={() => userClickHandle(card.cardName)}
                        className={`w-20 h-20 bg-white rounded-xl shadow-lg flex justify-center items-center text-gray-900 text-xl font-bold cursor-pointer transition-transform duration-300 hover:scale-110 hover:shadow-xl`}
                    >
                        {card.cardName === userSelection && card.cardName}
                    </div>
                ))}
            </div>

            <div className='mt-4'>
                <button
                    onClick={resetGame}
                    className='px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all duration-300'
                >
                    Reset Game
                </button>
            </div>
        </div>
    );
};

export default Cards;
