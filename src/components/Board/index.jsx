import React from "react";
import style from "./Board.module.scss";
import { boardPresentation } from "../../constants";
import PlayerCounter from "../PlayerCounter";
import snakeImage from "../../Images/snakes_and_ladders.png";

const Board = ({ players }) => {
  return (
    <div className={style.root}>
      <img alt="snakes and ladders" className={style.img} src={snakeImage} />
      {boardPresentation.map((value) => {
        return (
          <div className={style.box} key={value}>
            {players.one === value && <PlayerCounter color="one" />}
            {players.two === value && <PlayerCounter color="two" />}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
