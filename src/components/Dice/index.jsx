import React from "react";
import style from "./Dice.module.scss";
import Button from "../Button";

const Dice = ({ currentDiceValue, handleRollDice, color }) => {
  const handleOnClick = () => {
    handleRollDice(Math.ceil((Math.random() * 100) / 16.66));
  };
  return (
    <div className={style.root}>
      <div className={style.dice}>{currentDiceValue}</div>
      <Button
        className={style[color]}
        onClick={handleOnClick}
        value="Roll the dice"
      />
    </div>
  );
};

export default Dice;
