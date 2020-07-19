import React from "react";
import style from "./Button.module.scss";

const Button = ({ className, onClick, value, disable }) => {
  return (
    <button
      disabled={disable}
      className={[style.btn, className].join(" ")}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
