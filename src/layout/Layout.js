import React from "react";
import { Topbar, Footer } from "components";
import classes from "./Layout.module.scss";

const { layout_container } = classes;

export const Layout = ({ children }) => {
  return (
    <div className={layout_container}>
      <Topbar />
      <>{children}</>
      <Footer />
    </div>
  );
};
