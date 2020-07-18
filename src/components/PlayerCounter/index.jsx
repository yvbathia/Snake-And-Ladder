import React from "react";
import style from "./PlayerCounter.module.scss";

const PlayerCounter = ({ color }) => {
  return (
    <div className={[style.root, style[color]].join(" ")}>
      {color === "one" ? 1 : 2}
    </div>
  );
};

export default PlayerCounter;
