import React from "react";
import { homePageImg } from "assets";

import classes from "./Banner.module.scss";

const { banner_container, banner_text, home_page_img } = classes;

export const Banner = () => {
  return (
    <div className={banner_container}>
      <h1 className={banner_text}>
        <span>
          To shine your look and meet the comfort you aspire for, we try our
          best to deliver the best quality clothings.
        </span>
      </h1>
      <img src={homePageImg} alt="Home page image" className={home_page_img} />
    </div>
  );
};
