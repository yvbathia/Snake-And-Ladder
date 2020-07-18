import React from "react";
import style from "./Mode.module.scss";

const Mode = ({ letsPlay, setPlayers }) => {
  const handleOnClick = (mode) => {
    if (mode === 1) {
      setPlayers({ one: 1, two: -1 });
    } else {
      setPlayers({ one: 1, two: 1 });
    }
    letsPlay();
  };
  return (
    <div className={style.root}>
      <div>
        Welcome to the <b>SNAKE AND LADDER</b> Game
      </div>
      <div>Select play mode</div>
      <button className={style.btn} onClick={() => handleOnClick(1)}>
        Single Play
      </button>
      <button className={style.btn} onClick={() => handleOnClick(2)}>
        Dual Play
      </button>
    </div>
  );
};

export default Mode;
