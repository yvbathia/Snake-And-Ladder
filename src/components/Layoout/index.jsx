import React from "react";
import style from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={style.root}>
      <div className={style.children}>{children}</div>
    </div>
  );
};

export default Layout;
