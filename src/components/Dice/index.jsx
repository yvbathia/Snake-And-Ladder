import React from "react";
import style from "./Dice.module.scss";

const Dice = ({ currentDiceValue, handleRollDice, color }) => {
  const handleOnClick = () => {
    handleRollDice(Math.ceil((Math.random() * 100) / 16.66));
  };
  return (
    <div className={style.root}>
      <div className={style.dice}>{currentDiceValue}</div>
      <button className={style[color]} onClick={handleOnClick}>
        Roll the dice
      </button>
    </div>
  );
};

export default Dice;
