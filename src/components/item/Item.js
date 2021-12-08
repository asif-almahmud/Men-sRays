import React from "react";
import classes from "./Item.module.scss";

const { item_container } = classes;

export const Item = ({ children }) => {
  return <div className={item_container}>{children}</div>;
};
