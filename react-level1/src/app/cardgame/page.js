'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const cardOptions = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

const faceConfigId = {
    'A': 14,
    'K': 13,
    'Q': 12,
    'J': 11
}

const getCardValue = (card) => faceConfigId[card] || parseInt(card, 10)

const shuffleArray = (array) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
}

const Cards = () => {
    const [shuffledCards, setShuffledCards] = useState([])
    const [selectedCard, setSelectedCard] = useState(null)
    const [computerSelection, setComputerSelection] = useState(null)

    useEffect(() => {
        setShuffledCards(shuffleArray(cardOptions))
    }, [])

    useEffect(() => {
        if (selectedCard) {
            const randomCard = shuffledCards[Math.floor(Math.random() * shuffledCards.length)]
            setComputerSelection(randomCard)
        }
    }, [selectedCard, shuffledCards])

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-2">Choose a card:</h2>
            <div className="flex flex-wrap gap-3">
                {shuffledCards.map((card, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedCard(card)}
                        className="cursor-pointer p-2 shadow-lg bg-slate-400 rounded-lg"
                    >
                        <Image
                            src={`/images/cards/${card}.png`}
                            alt={card}
                            width={100}
                            height={150}
                            className="w-16 h-24 object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="mt-4 bg-yellow-200 text-red-600 font-bold">
                {selectedCard && (
                    <div>
                        <h3>You chose:</h3>
                        <Image
                            src={`/images/cards/${selectedCard}.png`}
                            alt={selectedCard}
                            width={100}
                            height={150}
                            className="w-16 h-24"
                        />
                    </div>
                )}

                {computerSelection && (
                    <div>
                        <h3>Computer chose:</h3>
                        <Image
                            src={`/images/cards/${computerSelection}.png`}
                            alt={computerSelection}
                            width={100}
                            height={150}
                            className="w-16 h-24"
                        />
                    </div>
                )}

                {selectedCard && computerSelection && (
                    <p className="mt-2 pb-24 font-extrabold">
                        {getCardValue(selectedCard) > getCardValue(computerSelection)
                            ? '🎉 You won!'
                            : getCardValue(selectedCard) < getCardValue(computerSelection)
                            ? '😞 You lost!'
                            : "😮 It's a tie!"}
                    </p>
                )}
            </div>
        </div>
    )
}

export default Cards



