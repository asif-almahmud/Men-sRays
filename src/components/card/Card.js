import React from "react";
import classes from "./Card.module.scss";

const { card_container } = classes;

export const Card = ({ children, style }) => {
  return (
    <div className={card_container} style={style}>
      {children}
    </div>
  );
};
