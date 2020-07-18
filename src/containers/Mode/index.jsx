import React from "react";
import style from "./Mode.module.scss";
import Button from "../../components/Button";

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
      <Button onClick={() => handleOnClick(1)} value="Single Play" />
      <Button onClick={() => handleOnClick(2)} value="Dual Play" />
    </div>
  );
};

export default Mode;
