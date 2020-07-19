import React, { useState } from "react";
import PlayerCounter from "../PlayerCounter";
import Dice from "../Dice";
import style from "./PlayArea.module.scss";
import { calculateNextValue } from "../../utils";

const PlayArea = ({ players, setPlayers, setWinner, gameOver }) => {
  const [currentDiceValue, setCurrentDiceValue] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState("one");

  const handleRollDice = (value) => {
    setCurrentDiceValue(value);
    const tempPlayer = { ...players };
    const nextValueWithoutRule = players[currentPlayer] + value;
    const nextValue = calculateNextValue(nextValueWithoutRule);

    if (nextValue === 100) {
      tempPlayer[currentPlayer] = nextValue;
      setPlayers({ ...tempPlayer });
      setTimeout(() => {
        setWinner("Player " + currentPlayer);
        gameOver();
      }, 1000);
    } else if (nextValue < 100) {
      console.log(nextValueWithoutRule, nextValue);
      if (nextValue !== nextValueWithoutRule) {
        tempPlayer[currentPlayer] = nextValueWithoutRule;
        setPlayers({ ...tempPlayer });
        setTimeout(() => {
          tempPlayer[currentPlayer] = nextValue;
          setPlayers({ ...tempPlayer });
        }, 1000);
      } else {
        tempPlayer[currentPlayer] = nextValue;
        setPlayers({ ...tempPlayer });
      }
    }

    if (currentPlayer === "one" && players.two !== -1) {
      setCurrentPlayer("two");
    } else {
      setCurrentPlayer("one");
    }
  };

  const currentPlayers = [];
  for (const key in players) {
    if (players[key] !== -1) {
      currentPlayers.push(key);
    }
  }

  return (
    <div className={style.root}>
      <div className={style.players}>
        {currentPlayers.map((value, index) => {
          return (
            <div key={value}>
              <div>Player {index + 1}</div>
              <PlayerCounter color={value} />
            </div>
          );
        })}
      </div>
      <Dice
        color={currentPlayer}
        currentDiceValue={currentDiceValue}
        handleRollDice={handleRollDice}
      />
    </div>
  );
};

export default PlayArea;
