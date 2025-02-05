"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const suits = ["♥", "♦", "♣", "♠"]
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const suitColors = {
  "♥": "text-red-500",
  "♦": "text-red-500",
  "♣": "text-gray-700",
  "♠": "text-gray-700",
}

const faceConfigId = {
  A: 14,
  K: 13,
  Q: 12,
  J: 11,
}

function createDeck() {
  return suits.flatMap((suit) => ranks.map((rank) => ({ rank, suit })))
}

function shuffleArray(array) {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

const getCardValue = (card) => {
  return faceConfigId[card.rank] || Number.parseInt(card.rank)
}

const Cards = () => {
  const [deck, setDeck] = useState([])
  const [selectedCard, setSelectedCard] = useState(null)
  const [computerSelection, setComputerSelection] = useState(null)
  const [result, setResult] = useState(null)
  const [score, setScore] = useState({ player: 0, computer: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setDeck(shuffleArray(createDeck()))
  }, [])

  useEffect(() => {
    if (selectedCard) {
      const randomCard = deck[Math.floor(Math.random() * deck.length)]
      setComputerSelection(randomCard)

      const playerValue = getCardValue(selectedCard)
      const computerValue = getCardValue(randomCard)

      if (playerValue > computerValue) {
        setResult("You won!")
        setScore((prev) => ({ ...prev, player: prev.player + 1 }))
      } else if (playerValue < computerValue) {
        setResult("You lost!")
        setScore((prev) => ({ ...prev, computer: prev.computer + 1 }))
      } else {
        setResult("It's a tie!")
      }
    }
  }, [selectedCard, deck])

  const resetGame = () => {
    setDeck(shuffleArray(createDeck()))
    setSelectedCard(null)
    setComputerSelection(null)
    setResult(null)
  }

  const handleCardSelect = (card) => {
    setSelectedCard(card)
    const randomCard = deck[Math.floor(Math.random() * deck.length)]
    setComputerSelection(randomCard)
  }

  if (!isClient) {
    return null // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white/90 backdrop-blur-sm">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Card Game</h1>
          <div className="flex justify-between items-center mb-6">
            <div className="text-lg font-semibold">Your Score: {score.player}</div>
            <div className="text-lg font-semibold">Computer Score: {score.computer}</div>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-13 gap-2 mb-6">
            { deck.map((card, index) => (
              
              <Button
                key={index}
                onClick={() => handleCardSelect(card)}
                className={`h-24 text-lg font-bold ${selectedCard === card ? "bg-blue-500 text-white" : "bg-white"} hover:bg-blue-600 hover:text-white transition-colors duration-200 flex flex-col items-center justify-center`}
                disabled={selectedCard !== null}
              >
         {selectedCard === card && (
  <div className="flex flex-col items-center justify-center">
    <span className={suitColors[card.suit]}>{card.rank}</span>
    <span className={`text-2xl ${suitColors[card.suit]}`}>{card.suit}</span>
  </div>
)}
              </Button>
            ))}
          </div>
          {selectedCard && computerSelection && (
            <div className="text-center">
              <p className="text-xl mb-2">
                You chose: <span className="font-bold">{selectedCard.rank}</span>
                <span className={`ml-1 ${suitColors[selectedCard.suit]}`}>{selectedCard.suit}</span>
              </p>
              <p className="text-xl mb-4">
                Computer chose: <span className="font-bold">{computerSelection.rank}</span>
                <span className={`ml-1 ${suitColors[computerSelection.suit]}`}>{computerSelection.suit}</span>
              </p>
              <p
                className={`text-2xl font-bold ${result === "You won!" ? "text-green-500" : result === "You lost!" ? "text-red-500" : "text-yellow-500"}`}
              >
                {result}
              </p>
            </div>
          )}
          <div className="flex justify-center mt-6">
            <Button
              onClick={resetGame}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-lg transition-colors duration-200"
            >
              Play Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Cards

