import React from "react";
import style from "./Winner.module.scss";

const Winner = ({ player, restartGame }) => {
  return (
    <div className={style.root}>
      <div>
        <b>SNAKE AND LADDER</b>
      </div>
      <div>{player} Win the game!</div>
      <button className={style.btn} onClick={restartGame}>
        Play Again!
      </button>
    </div>
  );
};

export default Winner;
