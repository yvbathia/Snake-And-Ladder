import React from "react";
import style from "./Button.module.scss";

const Button = ({ className, onClick, value }) => {
  return (
    <button
      className={[style.btn, className].join(" ")}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
