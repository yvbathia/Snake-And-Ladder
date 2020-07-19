import React, { useState } from "react";
import style from "./Dice.module.scss";
import Button from "../Button";

const Dice = ({ currentDiceValue, handleRollDice, color }) => {
  const [isBtnDisable, setIsBtnDisable] = useState(false);
  const handleOnClick = () => {
    setIsBtnDisable(true);
    handleRollDice(Math.ceil((Math.random() * 100) / 16.66));
    setTimeout(() => {
      setIsBtnDisable(false);
    }, 1000);
  };
  return (
    <div className={style.root}>
      <div className={style.dice}>{currentDiceValue}</div>
      <Button
        disable={isBtnDisable}
        className={style[color]}
        onClick={handleOnClick}
        value="Roll the dice"
      />
    </div>
  );
};

export default Dice;
