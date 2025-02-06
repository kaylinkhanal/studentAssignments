"use client";
import React, { useEffect, useState } from "react";

const Cards = () => {
  const [playerSelect, setPlayerSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [shuffledCardDeck, setShuffledCardDeck] = useState([]);

  const suits = [
    { name: "Spades", symbol: "♠️", power: 4 },
    { name: "Hearts", symbol: "♥️", power: 3 },
    { name: "Diamonds", symbol: "♦️", power: 2 },
    { name: "Clubs", symbol: "♣️", power: 1 },
  ];

  const ranks = [
    { card: "A", baseId: 13 },
    { card: "K", baseId: 12 },
    { card: "Q", baseId: 11 },
    { card: "J", baseId: 10 },
    { card: "10", baseId: 9 },
    { card: "9", baseId: 8 },
    { card: "8", baseId: 7 },
    { card: "7", baseId: 6 },
    { card: "6", baseId: 5 },
    { card: "5", baseId: 4 },
    { card: "4", baseId: 3 },
    { card: "3", baseId: 2 },
    { card: "2", baseId: 1 },
  ];

  const cardDeck = [];

  suits.forEach((suit, suitIndex) => {
    ranks.forEach((rank) => {
      cardDeck.push({
        card: `${rank.card}${suit.symbol}`,
        suit: suit.name,
        suitPower: suit.power,
        id: rank.baseId + suitIndex * 13,
        generalId: rank.baseId,
      });
    });
  });

  function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }

  useEffect(() => {
    setShuffledCardDeck(shuffleDeck([...cardDeck]));
  }, []);

  const computerPick = () => {
    if (shuffledCardDeck.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * shuffledCardDeck.length);
    const selectedCard = shuffledCardDeck[randomIndex];
    setComputerSelect(selectedCard);
    return selectedCard;
  };

  const compareCard = (playerCard, computerCard) => {
    if (!playerCard || !computerCard) return "Select a card first";

    if (playerCard.generalId !== computerCard.generalId) {
      if (playerCard.suitPower === compareCard.suitPower) {
        return "It's a Tie"
      }
      return playerCard.generalId > computerCard.generalId ? "You Win" : "You Lose";
    } else {
      return playerCard.suitPower > computerCard.suitPower ? "You Win" : "You Lose";
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-4">
      <section className="flex flex-col items-center w-full text-white font-bold text-lg md:text-xl mb-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-2 text-center">
          <p>You picked: {playerSelect ? playerSelect.card : ""}</p>
          <p>Computer picked: {computerSelect ? computerSelect.card : ""}</p>
        </div>
        <p className="mt-2 text-yellow-400">
          {playerSelect && computerSelect ? compareCard(playerSelect, computerSelect) : ""}
        </p>
      </section>

      <section className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 w-full max-w-4xl">
        {shuffledCardDeck.map((item) => {
            const isSelect = (playerSelect && playerSelect.id === item.id) || (computerSelect && computerSelect.id === item.id);
          return (
          <div
            className={`bg-blue-400 text-xl flex m-1 p-3 shadow-md w-16 h-20 sm:w-20 sm:h-24 justify-center items-center rounded-lg 
                ${item.suit === "Spades" || item.suit === "Clubs" ? "text-black" : "text-red-700"} 
                ${playerSelect && playerSelect.id === item.id ? "bg-green-600" : ""} 
                ${computerSelect && computerSelect.id === item.id ? "bg-orange-100" : ""}
                `}
            key={item.id}
            onClick={() => {
              const playerSelectedCard = item;
              setPlayerSelect(playerSelectedCard);
              const computerSelectedCard = computerPick();
              setTimeout(() => compareCard(playerSelectedCard, computerSelectedCard),0);
            }}
          >
            { isSelect ? item.card : ""}
          </div>
          )
        })}
      </section>
    </div>
  );
};

export default Cards;
